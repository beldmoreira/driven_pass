import { prisma } from "../config/database.js";
import { TypeSafeNoteData } from "../types/SafeNoteTypes.js";

export async function createSafeNote(
  userId: number,
  safeNote: TypeSafeNoteData
) {
  return prisma.safeNote.create({ data: { ...safeNote, userId } });
}

export async function deleteSafeNote(id: number) {
  return prisma.safeNote.delete({ where: { id } });
}

export async function getAllSafeNotes(userId: number) {
  return prisma.safeNote.findMany({ where: { userId } });
}

export async function getOneSafeNote(userId: number, safeNoteId: number) {
  return prisma.safeNote.findFirst({ where: { userId, id: safeNoteId } });
}

export async function getSafeNotesByTitle(userId: number, title: string) {
  return prisma.safeNote.findFirst({ where: { userId, title } });
}
