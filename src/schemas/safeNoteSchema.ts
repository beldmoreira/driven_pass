import joi from "joi";
import { TypeSafeNoteData } from "../types/SafeNoteTypes.js";

export const safeNoteSchema = joi.object<TypeSafeNoteData>({
  title: joi.string().max(50).required(),
  note: joi.string().max(1000).required(),
});
