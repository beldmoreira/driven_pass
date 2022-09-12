import { Request, Response } from "express";
import * as wifiService from "../services/wifiService.js";

export async function getWifi(req: Request, res: Response) {
  const { user } = res.locals;
  const wifiId = parseInt(req.params.id);
  if (isNaN(wifiId)) {
    res.sendStatus(422);
  }
  const wifi = await wifiService.getOneWifi(user.id, wifiId);
  res.send(wifi);
}

export async function getAllWifis(req: Request, res: Response) {
  const { user } = res.locals;
  const wifis = await wifiService.getAllWifis(user.id);
  res.send(wifis);
}

export async function createWifi(req: Request, res: Response) {
  const { user } = res.locals;
  const wifi = req.body;
  await wifiService.createWifi(user, wifi);
  res.sendStatus(201);
}

export async function deleteWifi(req: Request, res: Response) {
  const { user } = res.locals;
  const wifiId = parseInt(req.params.id);
  if (isNaN(wifiId)) {
    res.sendStatus(422);
  }
  await wifiService.deleteAllWifi(user, wifiId);
  res.sendStatus(200);
}
