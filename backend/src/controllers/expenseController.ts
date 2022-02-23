import { NextFunction, Request, Response } from "express";
import { Expense } from "../models/expenseModel";

const ExpenseController = () => {
	const index = async (req: Request, res: Response, next: NextFunction) => {
		const results = await Expense.find({});
		res.status(200).send(results);
	};

	const create = async (req: Request, res: Response, next: NextFunction) => {
		console.log(req.body);
		if (!req.body.name) {
			res.status(400);
			throw new Error("Please add the name of the expense");
		}
		const result = await Expense.create({
			name: req.body.name,
			quantity: req.body.quantity,
			description: req.body.description,
		});
		res.status(200).send(result);
	};

	const get = async (req: Request, res: Response, next: NextFunction) => {
		const result = await Expense.findById(req.params.id);
		if (!result) {
			res.status(400);
			throw new Error("Expense not found");
		}
		res.status(200).send(result);
	};

	const update = async (req: Request, res: Response, next: NextFunction) => {
		const result = await Expense.findById(req.params.id);
		if (!result) {
			res.status(400);
			throw new Error("Expense not found");
		}
		const updated = await Expense.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.status(200).send(updated);
	};

	const destroy = async (req: Request, res: Response, next: NextFunction) => {
		const result = await Expense.findById(req.params.id);
		if (!result) {
			res.status(400);
			throw new Error("Expense not found");
		}
		const deleted = await Expense.findByIdAndDelete(req.params.id)
		res.status(200).send(deleted);
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
