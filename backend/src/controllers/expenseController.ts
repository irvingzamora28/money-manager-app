import { NextFunction, Request, Response } from "express";

const ExpenseController = () => {
	const index = (req: Request, res: Response, next: NextFunction) => {
		res.status(200).send({ message: "Get expenses" });
	};

	const create = (req: Request, res: Response, next: NextFunction) => {
		console.log(req.body);
		if (!req.body.name) {
			res.status(400);
			throw new Error("Please add the name of the expense");
		}

		// res.status(200).send({ message: "Create expense" });
	};

	const get = (req: Request, res: Response, next: NextFunction) => {
		res.status(200).send({ message: "Get expense" });
	};

	const update = (req: Request, res: Response, next: NextFunction) => {
		res.status(200).send({ message: "Update expense" });
	};

	const destroy = (req: Request, res: Response, next: NextFunction) => {
		res.status(200).send({ message: "Delete expense" });
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
