import { AuthRequest } from "./../middleware/authMiddleware";
import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";
import UsernameGenerator from "../utils/usernameGenerator";

const UserController = () => {
	const index = async (req: Request, res: Response, next: NextFunction) => {};

	const create = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {};

	const get = async (req: AuthRequest, res: Response, next: NextFunction) => {
		try {
			if (req.user) {
				res.status(200).send(req.user)
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error) {
			next(error)	
		}
	};

	const update = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {};

	const destroy = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {};

	const register = async (
		req: Request,
		res: Response,
		next: NextFunction
	) => {
		try {
			const { name, email, password } = req.body;
			if (!name || !email || !password) {
				res.status(400);
				throw new Error("Please add all necessary fields");
			}
			const userExists = await User.findOne({ email });
			if (userExists) {
				res.status(400);
				throw new Error("User already exists");
			}
			// Hash password
			const salt = await bcrypt.genSalt(10);
			const hashedPassword = await bcrypt.hash(password, salt);
			const username = UsernameGenerator().generate();

			const user = await User.create({
				name,
				email,
				password: hashedPassword,
				username,
			});

			if (user) {
				res.status(201).send({
					_id: user.id,
					name: user.name,
					username: user.username,
					token: generateToken(user._id),
				});
			} else {
				res.status(400);
				throw new Error("Invalid user data");
			}
		} catch (error) {
			next(error);
		}
	};

	const login = async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { email, password } = req.body;
			if (!email || !password) {
				res.status(400);
				throw new Error("Please add all necessary fields");
			}

			const user = await User.findOne({ email });
			if (user && (await bcrypt.compare(password, user.password))) {
				res.status(201).send({
					_id: user.id,
					name: user.name,
					username: user.username,
					token: generateToken(user._id),
				});
			} else {
				res.status(400);
				throw new Error("Invalid user data");
			}
		} catch (error) {
			next(error);
		}
	};

	const generateToken = (id: string) => {
		const secret = process.env.JWT_SECRET ?? "";
		return jwt.sign({ id }, secret, { expiresIn: "30d" });
	};

	return {
		index,
		create,
		get,
		update,
		destroy,
		register,
		login,
	};
};

export default UserController;