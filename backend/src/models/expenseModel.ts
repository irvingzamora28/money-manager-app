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

const Expense = mongoose.model("Expense", expenseSchema);

export { Expense };
