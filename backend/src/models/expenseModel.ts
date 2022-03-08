import mongoose from "mongoose";
import { ExpenseDocumentInterface, ExpenseInterface, ExpenseModelInterface } from "../interfaces/ExpenseInterface";

const expenseSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		quantity: {
			type: Number,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	}
);

expenseSchema.statics.build = (attr: ExpenseInterface) => {
	return new Expense(attr);
};

const Expense = mongoose.model<ExpenseDocumentInterface, ExpenseModelInterface>("Expense", expenseSchema);

export { Expense };
