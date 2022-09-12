import { Router } from "express";
import {
  createCredential,
  deleteCredential,
  getAllCredentials,
  getOneCredential,
} from "../controllers/credentialController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { credentialSchema } from "../schemas/credentialSchema.js";

const credentialRouter = Router();
credentialRouter.post(
  "/credentials",
  joiValidation(credentialSchema),
  createCredential
);
credentialRouter.get("/credentials/:id", getOneCredential);
credentialRouter.get("/credentials", getAllCredentials);
credentialRouter.delete("/credentials/:id", deleteCredential);

export default credentialRouter;
