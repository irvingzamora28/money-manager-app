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
		if (expense.expenses) {
			return expense.expenses[0];
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

		if (expenses.expenses) {
			return expenses.expenses;
		} else {
			throw new Error(expenses.message);
		}
	} catch (error: any) {
		throw new Error(`There was an error getting the expenses: ${error.message}`);
	}
};

const deleteExpense = async (id: string, token: string): Promise<ExpenseInterface> => {
	try {
		const response = await fetch(`${API_URL}/${id}`, {
			method: "DELETE",
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

		const expense = await response.json();

		if (expense) {
			return expense;
		} else {
			throw new Error(expense.message);
		}
	} catch (error: any) {
		throw new Error(`There was an error deleting the expense: ${error.message}`);
	}
};

const expenseService = {
	createExpense,
	getExpenses,
	deleteExpense,
};

export default expenseService;
