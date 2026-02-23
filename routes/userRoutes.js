import express from "express";
const userRouter = express.Router();
import { getUsers, createUser } from "../controllers/userController.js";
userRouter.get("/", getUsers);
userRouter.post("/", createUser);
export default userRouter;