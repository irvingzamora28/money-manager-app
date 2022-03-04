import config from "../../config/config";

const API_URL = `${config.server.host}:${config.server.port}/api/expenses`;

const createExpense = async (expenseData: any, token: string) => {
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

        // TODO: Verify expense is OK
        const expense = await response.json();
		
		return expense;
	} catch (error: any) {
		throw new Error("There was an error creating the expense");
	}
};

const expenseService = {
	createExpense,
};

export default expenseService;
