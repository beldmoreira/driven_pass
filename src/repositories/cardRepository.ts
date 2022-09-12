import { prisma } from "../config/database";
import { TypeCardData } from "../types/CardTypes";

export async function createCard(userId: number, card: TypeCardData) {
  return prisma.card.create({ data: { ...card, userId } });
}

export async function deleteCard(id: number) {
  return prisma.card.delete({ where: { id } });
}

export async function getAllCards(userId: number) {
  return prisma.card.findMany({ where: { userId } });
}

export async function getOneCard(userId: number, cardId: number) {
  return prisma.card.findFirst({ where: { userId, id: cardId } });
}

export async function getCardByTitle(title: string, userId: number) {
  return prisma.card.findFirst({ where: { title, userId } });
}
