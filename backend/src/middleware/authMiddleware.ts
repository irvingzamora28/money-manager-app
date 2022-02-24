import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel";

interface JwtPayload {
	id: string;
}

export interface AuthRequest extends Request {
    user?: typeof User
}

const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith("Bearer")
	) {
		try {
			token = req.headers.authorization.split(" ")[1];
			// Verify token
			const secret = process.env.JWT_SECRET ?? "";
			const decoded = jwt.verify(token, secret) as JwtPayload;
			// Get user from token
			const userId = decoded.id ?? "";
			req.user = await User.findById(userId).select("-password -createdAt -updatedAt");
			next();
		} catch (error) {
			res.status(401);
			next(error);
		}
	}

	try {
		if (!token) {
			res.status(401);
			throw new Error("Not authorized, no token");
		}
	} catch (error) {
		next(error);
	}
};

export { protect };
