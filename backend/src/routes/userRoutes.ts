import express from "express";
import UserController from "../controllers/userController";
import { userLoginSchema, userRegisterSchema } from "../helpers/userValidation";
import { protect } from "../middleware/authMiddleware";
import validationMiddleware from "../middleware/validationMiddleware";
import { User } from "../models/userModel";
import UserService from "../services/UserService";

const user = User
const userService = UserService(user)
const userController = UserController(userService)
const router = express.Router();


router.post("/api/users/register", [validationMiddleware.validate(userRegisterSchema)], userController.register)
router.post("/api/users/login", [validationMiddleware.validate(userLoginSchema)], userController.login)
router.get("/api/users/me", [protect], userController.get)

export { router as userRouter };
