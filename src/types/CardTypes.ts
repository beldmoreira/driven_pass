import { Card } from "@prisma/client";

export type TypeCardData = Omit<Card, "id">;
