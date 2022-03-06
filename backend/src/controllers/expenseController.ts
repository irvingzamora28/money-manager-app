import { AuthRequest } from "./../middleware/authMiddleware";
import { NextFunction, Request, Response } from "express";
import { Expense } from "../models/expenseModel";

const ExpenseController = () => {
	const index = async (
		req: AuthRequest,
		res: Response,
		next: NextFunction
	) => {
		try {
			if (req.user) {
				const results = await Expense.find({ user: req.user.id }).sort({createdAt: 'desc'});
				res.status(200).send(results);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error) {
			next(error);
		}
	};

	const create = async (
		req: AuthRequest,
		res: Response,
		next: NextFunction
	) => {
		try {
			if (req.user) {
				if (!req.body.name) {
					res.status(400);
					throw new Error("Please add the name of the expense");
				}
				const result = await Expense.create({
					name: req.body.name,
					quantity: req.body.quantity,
					description: req.body.description,
					user: req.user.id,
				});
				res.status(200).send(result);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error) {
			next(error);
		}
	};

	const get = async (req: Request, res: Response, next: NextFunction) => {
		const result = await Expense.findById(req.params.id);
		if (!result) {
			res.status(400);
			throw new Error("Expense not found");
		}
		res.status(200).send(result);
	};

	const update = async (
		req: AuthRequest,
		res: Response,
		next: NextFunction
	) => {
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

				const updated = await Expense.findByIdAndUpdate(
					req.params.id,
					req.body,
					{ new: true }
				);
				res.status(200).send(updated);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error) {
			next(error);
		}
	};

	const destroy = async (
		req: AuthRequest,
		res: Response,
		next: NextFunction
	) => {
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
				const deleted = await Expense.findByIdAndDelete(req.params.id);
				res.status(200).send(deleted);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error) {
			next(error);
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
