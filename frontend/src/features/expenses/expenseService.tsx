import config from "../../config/config";
import ExpenseInterface from "../../interfaces/ExpenseInterface";

const API_URL = `${config.server.host}:${config.server.port}/api/expenses`;

const createExpense = async (expenseData: any, token: string): Promise<ExpenseInterface> => {
	try {
		// const options = {
		// 	headers: {
		// 		Authorization: `Bearer ${token}`,
		// 	},
		// };
        const response = await fetch(`${API_URL}`, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(expenseData),
        });

        // TODO: Format error
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

const expenseService = {
	createExpense,
};

export default expenseService;
