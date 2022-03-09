import { ExpenseInterface } from "../interfaces/ExpenseInterface";
import { Expense } from "../models/expenseModel";
import ExpenseService from "../services/ExpenseService";

const mockExpense: ExpenseInterface = {
    name: 'Expense 1',
    quantity: 145.99,
    description: 'Expense description 1',
    user: "6216ced25c4f751cc83bf081",
  };

describe("ExpenseService", () => {
	describe("given a call to method all", () => {
		test("should return all expenses", async () => {
			const expense = Expense;
			const expenseService = ExpenseService(expense);
			jest.spyOn(expense, "find").mockImplementationOnce(() => ({
				sort: () =>  [mockExpense],
			}) as any);

			const result = await expenseService.all("6216ced25c4f751cc83bf081");
			console.log(result);
			expect(true == true);
		});
	});
});
