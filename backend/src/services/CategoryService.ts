import { CategoryModelInterface } from "../interfaces/CategoryInterface";
import { CategoryServiceResponse, CategoryServiceType } from "../types";


const CategoryService = (category: CategoryModelInterface):CategoryServiceType => {
    const all = async (userId: string): Promise<CategoryServiceResponse>  => {
        try {
            const result = await category.find({user: userId}).sort({createdAt: "desc"});
            return {
                categories: result
            }
            
        } catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
        }
    }

    const get = async (id: string): Promise<CategoryServiceResponse>  => {
        try {
			const result = await category.findById(id);
			if (!result) {
				return { error: { errorCode: 99, message: "Category not found" } };
			}
			return { categories: [result] };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
    }

    const insert = async (name: string, icon: string, user: string): Promise<CategoryServiceResponse>  => {
        try {
			const result = category.build({
				name,
				icon,
				user,
			});
			await result.save();
			return { categories: [result] };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
    }

    const update = async (id: string, data: object): Promise<CategoryServiceResponse>  => {
        try {
			const result = await category.findByIdAndUpdate(id, data, { new: true });
			if (!result) {
				return { error: { errorCode: 99, message: "Not found" } };
			}

			return { categories: [result] };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
    }

    const destroy = async (id: string): Promise<CategoryServiceResponse>  => {
        try {
			await category.findByIdAndDelete(id);
			return { categories: [] };
		} catch (error: any) {
			return { error: { errorCode: 99, message: error.message } };
		}
    }

    return {
        all,
        get,
        insert,
        update,
        destroy
    }
}

export default CategoryService
