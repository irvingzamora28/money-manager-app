import { NextFunction, Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import { Category } from '../models/categoryModel';
import { CategoryServiceType, ControllerType } from '../types';

const CategoryController = (categoryService: CategoryServiceType): ControllerType => {
	const index = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user && req.user.id) {
				const results = await categoryService.all(req.user.id);
				return res.status(200).send(results);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

    const create = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user && req.user.id) {
				const result = await categoryService.insert(
					req.body.name,
					req.body.icon,
					req.user.id
				);
				return res.status(200).send(result);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

    const get = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			const result = await categoryService.get(req.params.id);
			if (!result) {
				res.status(400);
				throw new Error("Expense not found");
			}
			return res.status(200).send(result);
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

    const update = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user) {
				const result = await Category.findById(req.params.id);
				if (!result) {
					res.status(400);
					throw new Error("Category not found");
				}
				// TODO: Find a way to check for Category ownership in middleware or extract function
				if (result.user.toString() !== req.user.id) {
					res.status(400);
					throw new Error("User invalid");
				}

				const updated = await categoryService.update(req.params.id, req.body);
				return res.status(200).send(updated);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

    const destroy = async (req: AuthRequest, res: Response, next: NextFunction): Promise<Response> => {
		try {
			if (req.user) {
				const result = await Category.findById(req.params.id);
				if (!result) {
					res.status(400);
					throw new Error("Category not found");
				}
				// TODO: Find a way to check for Category ownership in middleware or extract function
				if (result.user.toString() !== req.user.id) {
					res.status(400);
					throw new Error("User invalid");
				}
				const deleted = await categoryService.destroy(req.params.id);
				return res.status(200).send(deleted);
			} else {
				res.status(400);
				throw new Error("User invalid");
			}
		} catch (error: any) {
			return res.status(500).json({ message: error.message });
		}
	};

	return {
		index,
        create,
        get,
        update,
        destroy
	};
};

export default CategoryController;
