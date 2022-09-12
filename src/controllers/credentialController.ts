import { Request, Response } from "express";
import { Credential } from "@prisma/client";
import * as credentialService from "../services/credentialService.js";

export async function createCredential(req: Request, res: Response) {
  const credential = req.body;
  const { user } = res.locals;
  await credentialService.createCredential(credential, user);
  res.sendStatus(201);
}

export async function deleteCredential(req: Request, res: Response) {
  const credentialId = parseInt(req.params.id);
  if (isNaN(credentialId)) {
    res.sendStatus(422);
  }

  const { user } = res.locals;
  await credentialService.deleteCredential(user, credentialId);
  res.sendStatus(200);
}

export async function getOneCredential(req: Request, res: Response) {
  const { user } = res.locals;
  const credentialId = parseInt(req.params.id);
  if (isNaN(credentialId)) {
    res.sendStatus(422);
  }

  const credential = await credentialService.getOneCredential(
    user.id,
    credentialId
  );
  res.send(credential);
}

export async function getAllCredentials(req: Request, res: Response) {
  const { user } = res.locals;
  const credentials: Credential[] = await credentialService.getAllCredentials(
    user.id
  );
  res.send(credentials);
}
