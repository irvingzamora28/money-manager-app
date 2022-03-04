import ExpenseInterface from "./ExpenseInterface";

export default interface ExpenseStateInterface {
	expenses: ExpenseInterface[] | null;
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: string;
}
