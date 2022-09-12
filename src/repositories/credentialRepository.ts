import { prisma } from "../config/database.js";
import { TypeCredentialData } from "../types/CredentialTypes.js";

export async function createCredential(
  credential: TypeCredentialData,
  userId: number
) {
  return prisma.credential.create({ data: { ...credential, userId } });
}

export async function deleteCredential(id: number) {
  return prisma.credential.delete({ where: { id } });
}

export async function getAllCredentials(userId: number) {
  return prisma.credential.findMany({ where: { userId } });
}

export async function getCredentialsByTitle(title: string, userId: number) {
  return prisma.credential.findFirst({ where: { title, userId } });
}
export async function getOneCredential(userId: number, credentialId: number) {
  return prisma.credential.findFirst({ where: { userId, id: credentialId } });
}
