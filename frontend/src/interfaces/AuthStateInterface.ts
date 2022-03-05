import { SuccessResponseInterface } from './SuccessResponseInterface';
import { ErrorResponseInterface } from './ErrorResponseInterface';
import UserInterface from "./UserInterface";

export default interface AuthStateInterface {
	user: UserInterface | null;
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	error: ErrorResponseInterface;
    success: SuccessResponseInterface;
}
