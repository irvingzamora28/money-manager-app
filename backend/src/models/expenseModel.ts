import mongoose from "mongoose";

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
	},
	{
		timestamps: true,
	}
);

const Expense = mongoose.model("Expense", expenseSchema);

export { Expense };
