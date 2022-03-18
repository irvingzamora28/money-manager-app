import mongoose from 'mongoose';
import { CategoryDocumentInterface, CategoryInterface, CategoryModelInterface } from '../interfaces/CategoryInterface';

const categorySchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		icon: {
			type: String,
			required: true
		},
        user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true
	}
);

categorySchema.statics.build = (attr: CategoryInterface) => {
	return new Category(attr);
};

const Category = mongoose.model<CategoryDocumentInterface, CategoryModelInterface>('Category', categorySchema);

export { Category };
