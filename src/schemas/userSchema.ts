import joi from "joi";
import { TypeUserData } from "../types/UserTypes.js";

export const userSchema = joi.object<TypeUserData>({
  email: joi.string().email().required(),
  password: joi.string().min(10).required(),
});
