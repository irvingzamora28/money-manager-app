import { ExpenseServiceType, ControllerType } from "./../types";
import { AuthRequest } from "./../middleware/authMiddleware";
import { NextFunction, Request, Response } from "express";
import { Expense } from "../models/expenseModel";

const ExpenseController = (expenseService: ExpenseServiceType): ControllerType => {
	const index = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user) {
				const results = await expenseService.all(req.user.id);
				return res.status(200).send(results);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	const create = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user) {
				if (!req.body.name) {
					res.status(400);
					throw new Error("Please add the name of the expense");
				}
				const result = await expenseService.insert(
					req.body.name,
					req.body.quantity,
					req.body.description,
					req.user.id
				);
				return res.status(200).send(result);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	const get = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
		try {
			const result = await expenseService.get(req.params.id);
			if (!result) {
				res.status(400);
				throw new Error("Expense not found");
			}
			return res.status(200).send(result);
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	const update = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user) {
				const result = await Expense.findById(req.params.id);
				if (!result) {
					res.status(400);
					throw new Error("Expense not found");
				}
				// TODO: Find a way to check for expense ownership in middleware or extract function
				if (result.user.toString() !== req.user.id) {
					res.status(400);
					throw new Error("User invalid");
				}

				const updated = await expenseService.update(req.params.id, req.body);
				return res.status(200).send(updated);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	const destroy = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user) {
				const result = await Expense.findById(req.params.id);
				if (!result) {
					res.status(400);
					throw new Error("Expense not found");
				}
				// TODO: Find a way to check for expense ownership in middleware or extract function
				if (result.user.toString() !== req.user.id) {
					res.status(400);
					throw new Error("User invalid");
				}
				const deleted = await expenseService.destroy(req.params.id);
				return res.status(200).send(deleted);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	return {
		index,
		create,
		get,
		update,
		destroy,
	};
};

export default ExpenseController;
