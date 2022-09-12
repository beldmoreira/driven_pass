import { SafeNote } from "@prisma/client";

export type TypeSafeNoteData = Omit<SafeNote, "id">;
