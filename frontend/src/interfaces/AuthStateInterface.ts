import UserInterface from "./UserInterface";

export default interface AuthStateInterface {
	user: UserInterface | null;
	isError: boolean;
	isSuccess: boolean;
	isLoading: boolean;
	message: string;
}
