import mongoose from "mongoose";
import { Document } from "mongoose";

interface ExpenseInterface {
	name: string;
	quantity: number;
	description: string;
	user: string;
}

interface ExpenseDocumentInterface extends Document {
	name: string;
	quantity: number;
	description: string;
	user: string;
}

interface ExpenseModelInterface extends mongoose.Model<ExpenseDocumentInterface> {
	build(attr: ExpenseInterface): ExpenseDocumentInterface;
}

export { ExpenseInterface, ExpenseDocumentInterface, ExpenseModelInterface };
