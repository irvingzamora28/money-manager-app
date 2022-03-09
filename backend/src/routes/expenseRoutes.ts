import express from "express";
import ExpenseController from "../controllers/expenseController";
import { protect } from "../middleware/authMiddleware";
import { Expense } from "../models/expenseModel";
import ExpenseService from "../services/ExpenseService";
import validationMiddleware from "../middleware/validationMiddleware";
import { expenseCreateSchema, expenseUpdateSchema } from "../helpers/expenseValidation";

const expense = Expense;
const expenseService = ExpenseService(expense);
const expenseController = ExpenseController(expenseService);
const router = express.Router();

router.get("/api/expenses", [protect], expenseController.index);
router.post("/api/expenses", [protect, validationMiddleware.validate(expenseCreateSchema)], expenseController.create);
router.get("/api/expenses/:id", [protect], expenseController.get);
router.put("/api/expenses/:id", [protect, validationMiddleware.validate(expenseUpdateSchema)], expenseController.update);
router.delete("/api/expenses/:id", [protect], expenseController.destroy);

export { router as productRouter };
