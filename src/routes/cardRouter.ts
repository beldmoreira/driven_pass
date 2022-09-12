import { Router } from "express";
import {
  createCard,
  deleteCard,
  getAllCards,
  getOneCard,
} from "../controllers/cardController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { cardSchema } from "../schemas/cardSchema.js";

const cardRouter = Router();
cardRouter.post("/cards", joiValidation(cardSchema), createCard);
cardRouter.get("/cards", getAllCards);
cardRouter.get("/cards/:id", getOneCard);
cardRouter.delete("/cards/:id", deleteCard);

export default cardRouter;
