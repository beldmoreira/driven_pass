import { prisma } from "../config/database.js";
import { TypeCredentialData } from "../types/CredentialTypes.js";

export async function createCredential(
  userId: number,
  credential: TypeCredentialData
) {
  return prisma.credential.create({ data: { ...credential, userId } });
}

export async function deleteCredential(id: number) {
  return prisma.credential.delete({ where: { id } });
}

export async function getAllCredentials(userId: number) {
  return prisma.credential.findMany({ where: { userId } });
}

export async function getCredentialsByTitle(userId: number, title: string) {
  return prisma.credential.findFirst({ where: { userId, title } });
}
export async function getOneCredential(userId: number, credentialId: number) {
  return prisma.credential.findFirst({ where: { userId, id: credentialId } });
}
