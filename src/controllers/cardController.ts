import { Request, Response } from "express";
import * as cardService from "../services/cardService.js";

export async function getAllCards(req: Request, res: Response) {
  const { user } = res.locals;
  const cards = await cardService.getAllCards(user.id);
  res.send(cards);
}

export async function getOneCard(req: Request, res: Response) {
  const { user } = res.locals;
  const cardId = parseInt(req.params.id);
  if (isNaN(cardId)) {
    res.sendStatus(422);
  }
  const oneCard = await cardService.getOneCard(user.id, cardId);
  res.send(oneCard);
}

export async function createCard(req: Request, res: Response) {
  const { user } = res.locals;
  const card = req.body;
  await cardService.createCard(user, card);
  res.sendStatus(201);
}

export async function deleteCard(req: Request, res: Response) {
  const cardId = parseInt(req.params.id);
  if (isNaN(cardId)) {
    res.sendStatus(422);
  }
  const { user } = res.locals;
  await cardService.deleteCard(user, cardId);
  res.sendStatus(200);
}
