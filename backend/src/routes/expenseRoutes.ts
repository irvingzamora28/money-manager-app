import express from "express";
import ExpenseController from "../controllers/expenseController";
import { protect } from "../middleware/authMiddleware";

const expenseController = ExpenseController()
const router = express.Router();

router.get("/api/expenses", [protect], expenseController.index);

router.post("/api/expenses", [protect], expenseController.create);

router.get("/api/expenses/:id", [protect], expenseController.get);

router.put("/api/expenses/:id", [protect], expenseController.update);

router.delete("/api/expenses/:id", [protect], expenseController.destroy);

export { router as productRouter };
