import mongoose from 'mongoose';
import { Document } from 'mongoose';

interface CategoryInterface {
	name: string;
	icon: string;
	user: string;
}

interface CategoryDocumentInterface extends Document {
	name: string;
	icon: string;
	user: string;
}

interface CategoryModelInterface extends mongoose.Model<CategoryDocumentInterface> {
	build(attr: CategoryInterface): CategoryDocumentInterface;
}

export { CategoryInterface, CategoryDocumentInterface, CategoryModelInterface };
