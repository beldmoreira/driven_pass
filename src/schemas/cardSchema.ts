import joi from "joi";
import { TypeCardData } from "../types/CardTypes.js";

export const cardSchema = joi.object<TypeCardData>({
  title: joi.string().required(),
  number: joi.string().required(),
  cardHolderName: joi.string().required(),
  securityCode: joi.string().max(3),
  expirationDate: joi.string().required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().required(),
});
