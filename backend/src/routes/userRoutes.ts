import express from "express";
import UserController from "../controllers/userController";

const userController = UserController()
const router = express.Router();

router.post("/api/users/register", [], userController.register)
router.post("/api/users/login", [], userController.login)
router.get("/api/users/:id", [], userController.get)

export { router as userRouter };
