import { Router } from "express";
import {
  createSafeNote,
  deleteSafeNote,
  getAllSafeNotes,
  getOneSafeNote,
} from "../controllers/safeNotesController.js";
import joiValidation from "../middlewares/joiValidation.js";
import { safeNoteSchema } from "../schemas/safeNoteSchema.js";

const safeNoteRouter = Router();
safeNoteRouter.post(
  "/safenotes",
  joiValidation(safeNoteSchema),
  createSafeNote
);
safeNoteRouter.get("/safenotes", getAllSafeNotes);
safeNoteRouter.get("/safenotes/:id", getOneSafeNote);
safeNoteRouter.delete("/safenotes/:id", deleteSafeNote);
export default safeNoteRouter;
