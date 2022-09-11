import { Router } from "express";
import { signIn, signUp } from "../controllers/userController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { userSchema } from "../schemas/userSchema.js";

const userRouter = Router();
userRouter.post("/signup", joiValidation(userSchema), signUp);
userRouter.post("/signin", joiValidation(userSchema), signIn);
export default userRouter;
