import { Request, Response } from "express";
import * as safeNoteService from "../services/safeNotesService.js";

export async function createSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const credential = req.body;
  await safeNoteService.createSafeNote(user, credential);
  res.sendStatus(201);
}

export async function deleteSafeNote(req: Request, res: Response) {
  const safeNoteId = parseInt(req.params.id);
  if (isNaN(safeNoteId)) {
    res.sendStatus(422);
  }
  const { user } = res.locals;
  await safeNoteService.deleteSafeNote(user, safeNoteId);
  res.sendStatus(201);
}

export async function getOneSafeNote(req: Request, res: Response) {
  const { user } = res.locals;
  const safeNoteId = parseInt(req.params.id);
  if (isNaN(safeNoteId)) {
    res.sendStatus(422);
  }
  const safeNote = await safeNoteService.getOneNote(user.id, safeNoteId);
  res.send(safeNote);
}

export async function getAllSafeNotes(req: Request, res: Response) {
  const { user } = res.locals;
  const allSafeNotes = await safeNoteService.getAllNotes(user.id);
  res.send(allSafeNotes);
}
