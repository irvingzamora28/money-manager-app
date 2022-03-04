import { ErrorResponseInterface } from "./ErrorResponseInterface";
import ExpenseInterface from "./ExpenseInterface";
import { SuccessResponseInterface } from "./SuccessResponseInterface";

export default interface ExpenseStateInterface {
	expenses: ExpenseInterface[] | null;
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	error: ErrorResponseInterface;
    success: SuccessResponseInterface;
}
