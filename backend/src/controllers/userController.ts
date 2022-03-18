import { AuthRequest } from './../middleware/authMiddleware';
import { NextFunction, Request, Response } from 'express';
import { AuthenticationControllerType, UserServiceType } from '../types';
import jwt from 'jsonwebtoken';

const UserController = (userService: UserServiceType): AuthenticationControllerType => {
	const get = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user) {
				return res.status(200).send(req.user);
			} else {
				res.status(400);
				throw new Error('User invalid');
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	const register = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		try {
			const { name, email, password } = req.body;
			const result = await userService.register(name, email, password);

			// TODO: Verify a better way to generate token with user id
			if (result.user) {
				return res.status(201).send({
					_id: result.user.id,
					name: result.user.name,
					username: result.user.username,
					token: generateToken(result.user._id ?? "")
				});
			} else {
				res.status(400);
				throw new Error(result.error?.message);
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	const login = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		try {
			const { email, password } = req.body;

			const result = await userService.login(email, password);
			if (result.user) {
				return res.status(201).send({
					_id: result.user.id,
					name: result.user.name,
					username: result.user.username,
					token: generateToken(result.user._id ?? "")
				});
			} else {
				res.status(400);
				throw new Error(result.error?.message);
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	const generateToken = (id: string) => {
		const secret = process.env.JWT_SECRET ?? "";
		return jwt.sign({ id }, secret, { expiresIn: '30d' });
	};

	return {
		get,
		register,
		login
	};
};

export default UserController;
