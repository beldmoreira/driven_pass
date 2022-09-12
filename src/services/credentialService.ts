import * as credentialRepository from "../repositories/credentialRepository.js";
import { TypeCredentialData } from "../types/CredentialTypes.js";
import { User } from "@prisma/client";
import { decrypt } from "../util/crypt.js";
import { encrypt } from "../util/crypt.js";

export async function createCredential(
  user: User,
  credential: TypeCredentialData
) {
  const credentialExists = await credentialRepository.getCredentialsByTitle(
    user.id,
    credential.title
  );
  if (credentialExists) {
    throw { type: "conflict" };
  }
  const credentialPassword = credential.password;
  const credentialData = {
    ...credential,
    password: encrypt(credentialPassword),
  };
  await credentialRepository.createCredential(user.id, credentialData);
}

export async function deleteCredential(user: User, credentialId: number) {
  await getOneCredential(user.id, credentialId);
  await credentialRepository.deleteCredential(credentialId);
}

export async function getOneCredential(userId: number, credentialId: number) {
  const credential = await credentialRepository.getOneCredential(
    userId,
    credentialId
  );
  if (!credential) {
    throw { type: "not_found" };
  }
  return credential;
}

export async function getAllCredentials(userId: number) {
  const credentials = await credentialRepository.getAllCredentials(userId);
  return credentials.map((credential) => {
    const { password } = credential;
    return { ...credential, password: decrypt(password) };
  });
}
