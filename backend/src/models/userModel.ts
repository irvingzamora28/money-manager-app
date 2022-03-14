import mongoose from "mongoose";
import {UserDocumentInterface, UserInterface, UserModelInterface} from "../interfaces/UserInterface";

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		username: {
			type: String,
			required: true,
			unique: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

userSchema.statics.build = (attr: UserInterface) => {
	return new User(attr);
};


const User = mongoose.model<UserDocumentInterface, UserModelInterface>("User", userSchema);

export { User };
