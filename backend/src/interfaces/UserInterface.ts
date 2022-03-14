import mongoose from "mongoose";
import { Document } from "mongoose";

interface UserInterface {
	id?: string;
	_id?: string;
	name: string;
	username: string;
	email: string;
	password: string;
}

interface UserDocumentInterface extends Document {
	name: string;
	username: string;
	email: string;
	password: string;
}

interface UserModelInterface extends mongoose.Model<UserDocumentInterface> {
	build(attr: UserInterface): UserDocumentInterface;
}

export { UserInterface, UserDocumentInterface, UserModelInterface };
