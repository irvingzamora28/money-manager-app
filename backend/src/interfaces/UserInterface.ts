import { Document } from "mongoose";

export default interface UserInterface extends Document {
	name: string;
	username: string;
	email: string;
	password: string;
}
