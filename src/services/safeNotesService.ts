import { User } from "@prisma/client";
import * as safeNoteRepository from "../repositories/safeNotesRepository.js";
import { TypeSafeNoteData } from "../types/SafeNoteTypes.js";

export async function getAllNotes(userId: number) {
  const safeNotes = await safeNoteRepository.getAllSafeNotes(userId);
  return safeNotes;
}

export async function getOneNote(userId: number, safeNoteId: number) {
  const safeNote = await safeNoteRepository.getOneSafeNote(userId, safeNoteId);
  if (!safeNote) {
    throw { type: "not_found" };
  }
  return safeNote;
}

export async function createSafeNote(user: User, safeNote: TypeSafeNoteData) {
  const safeNoteExists = await safeNoteRepository.getSafeNotesByTitle(
    user.id,
    safeNote.title
  );
  if (safeNoteExists) {
    throw { type: "conflict" };
  }
  await safeNoteRepository.createSafeNote(user.id, safeNote);
}

export async function deleteSafeNote(user: User, safeNoteId: number) {
  await getOneNote(user.id, safeNoteId);
  await safeNoteRepository.deleteSafeNote(safeNoteId);
}
