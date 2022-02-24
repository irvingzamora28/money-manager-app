import express from "express";
import UserController from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";

const userController = UserController()
const router = express.Router();


router.post("/api/users/register", [], userController.register)
router.post("/api/users/login", [], userController.login)
router.get("/api/users/me", [protect], userController.get)

export { router as userRouter };
