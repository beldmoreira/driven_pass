import * as cardRepository from "../repositories/cardRepository.js";
import { decrypt } from "../util/crypt.js";
import { encrypt } from "../util/crypt.js";
import { User } from "@prisma/client";
import { TypeCardData } from "../types/CardTypes.js";

export async function createCard(user: User, card: TypeCardData) {
  const cardExists = await cardRepository.getCardByTitle(user.id, card.title);
  if (cardExists) {
    throw { type: "conflict" };
  }
  const cardData: TypeCardData = {
    ...card,
    password: encrypt(card.password),
    securityCode: encrypt(card.securityCode),
  };
  await cardRepository.createCard(user.id, cardData);
}

export async function getOneCard(userId: number, cardId: number) {
  const card = await cardRepository.getOneCard(userId, cardId);
  if (!card) {
    throw { type: "not_found" };
  }
  return {
    ...card,
    password: decrypt(card.password),
    securityCode: decrypt(card.securityCode),
  };
}

export async function getAllCards(userId: number) {
  const cards = await cardRepository.getAllCards(userId);
  return cards.map((card) => {
    return {
      ...card,
      password: decrypt(card.password),
      securityCode: decrypt(card.securityCode),
    };
  });
}

export async function deleteCard(user: User, cardId: number) {
  await getOneCard(user.id, cardId);
  await cardRepository.deleteCard(cardId);
}
