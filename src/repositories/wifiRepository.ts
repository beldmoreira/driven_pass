import { TypeWifiData } from "../types/WifiTypes.js";
import { prisma } from "../config/database.js";

export async function createWifi(userId: number, wifi: TypeWifiData) {
  return prisma.wifi.create({ data: { ...wifi, userId } });
}

export async function deleteWifi(id: number) {
  return prisma.wifi.delete({ where: { id } });
}

export async function getAllWifis(userId: number) {
  return prisma.wifi.findMany({ where: { userId } });
}

export async function getOneWifi(userId: number, wifiId: number) {
  return prisma.wifi.findFirst({ where: { userId, id: wifiId } });
}
