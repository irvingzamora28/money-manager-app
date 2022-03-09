
import { Schema } from "@hapi/joi";
import { NextFunction, Request, Response } from "express";

const validate = (schema: Schema) => {
	return async (req: Request, res: Response, next: NextFunction) => {
		try {
			await schema.validateAsync(req.body);
			next();
		} catch (error: any) {
			return res.status(422).json({ message: error.message });
		}
	};
};

export default { validate };