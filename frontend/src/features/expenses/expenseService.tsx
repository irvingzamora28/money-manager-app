import config from "../../config/config";
import ExpenseInterface from "../../interfaces/ExpenseInterface";

const API_URL = `${config.server.host}:${config.server.port}/api/expenses`;

const createExpense = async (expenseData: any, token: string): Promise<ExpenseInterface> => {
	try {
		const response = await fetch(`${API_URL}`, {
			method: "POST",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
			body: JSON.stringify(expenseData),
		});

		const expense = await response.json();
		if (expense.name) {
			return expense;
		} else {
			throw new Error(expense.message);
		}
	} catch (error: any) {
		throw new Error(`There was an error creating the expense: ${error.message}`);
	}
};

const getExpenses = async (token: string): Promise<ExpenseInterface[]> => {
	try {
		const response = await fetch(`${API_URL}`, {
			method: "GET",
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${token}`,
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
		});

		const expenses = await response.json();
        
		if (expenses) {
			return expenses;
		} else {
			throw new Error(expenses.message);
		}
	} catch (error: any) {
		throw new Error(`There was an error getting the expenses: ${error.message}`);
	}
};

const expenseService = {
	createExpense,
	getExpenses,
};

export default expenseService;
