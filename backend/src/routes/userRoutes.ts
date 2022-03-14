import express from "express";
import UserController from "../controllers/userController";
import { protect } from "../middleware/authMiddleware";
import { User } from "../models/userModel";
import UserService from "../services/UserService";

const user = User
const userService = UserService(user)
const userController = UserController(userService)
const router = express.Router();


router.post("/api/users/register", [], userController.register)
router.post("/api/users/login", [], userController.login)
router.get("/api/users/me", [protect], userController.get)

export { router as userRouter };
