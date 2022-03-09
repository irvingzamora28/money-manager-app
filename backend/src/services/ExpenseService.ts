import { ExpenseServiceType, ExpenseServiceResponse } from "./../types";
import { ExpenseModelInterface } from "../interfaces/ExpenseInterface";

const ExpenseService = (expense: ExpenseModelInterface): ExpenseServiceType => {
	const all = async (userId: string): Promise<ExpenseServiceResponse> => {
		try {
			const result = await expense.find({ user: userId }).sort({ createdAt: "desc" });
			return { expenses: result };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
	};
	const get = async (id: string): Promise<ExpenseServiceResponse> => {
		try {
			const result = await expense.findById(id);
			if (!result) {
				return { error: { errorCode: 99, message: "Expense not found" } };
			}
			return { expenses: [result] };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
	};
	const insert = async (
		name: string,
		quantity: number,
		description: string,
		user: string
	): Promise<ExpenseServiceResponse> => {
		try {
			const result = expense.build({
				name,
				quantity,
				description,
				user,
			});
			await result.save();
			return { expenses: [result] };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
	};
	const update = async (id: string, data: object): Promise<ExpenseServiceResponse> => {
		try {
			const result = await expense.findByIdAndUpdate(id, data, { new: true });
			if (!result) {
				return { error: { errorCode: 99, message: "Not found" } };
			}

			return { expenses: [result] };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
	};
	const destroy = async (id: string): Promise<ExpenseServiceResponse> => {
		try {
			await expense.findByIdAndDelete(id);
			return { expenses: [] };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
	};

	return {
		all,
		get,
		insert,
		update,
		destroy,
	};
};

export default ExpenseService;
