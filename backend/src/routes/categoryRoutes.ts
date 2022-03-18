import express from 'express';
import CategoryController from '../controllers/categoryController';
import { categoryCreateSchema, categoryUpdateSchema } from '../helpers/categoryValidation';
import { protect } from '../middleware/authMiddleware';
import validationMiddleware from '../middleware/validationMiddleware';
import { Category } from '../models/categoryModel';
import CategoryService from '../services/CategoryService';

const router = express.Router();
const category = Category;
const categoryService = CategoryService(category);
const categoryController = CategoryController(categoryService);

router.get('/api/categories', [protect], categoryController.index);
router.post('/api/categories', [protect, validationMiddleware.validate(categoryCreateSchema)], categoryController.create);
router.get("/api/categories/:id", [protect], categoryController.get);
router.put("/api/categories/:id", [protect, validationMiddleware.validate(categoryUpdateSchema)], categoryController.update);
router.delete("/api/categories/:id", [protect], categoryController.destroy);

export { router as categoryRouter };
