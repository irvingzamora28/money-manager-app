import CategoryInterface from "./CategoryInterface";
import { ErrorResponseInterface } from "./ErrorResponseInterface";
import { SuccessResponseInterface } from "./SuccessResponseInterface";

export default interface CategoryStateInterface {
	categories: CategoryInterface[];
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	error: ErrorResponseInterface;
    success: SuccessResponseInterface;
}
