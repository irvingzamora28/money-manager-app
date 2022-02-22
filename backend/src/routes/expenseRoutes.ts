import express, { Request, Response } from "express";
import ExpenseController from "../controllers/expenseController";

const expenseController = ExpenseController()
const router = express.Router();

router.get("/api/expenses", [], expenseController.index);

router.post("/api/expenses", [], expenseController.create);

router.get("/api/expenses/:id", [], expenseController.get);

router.put("/api/expenses/:id", [], expenseController.update);

router.delete("/api/expenses/:id", [], expenseController.destroy);

export { router as productRouter };
