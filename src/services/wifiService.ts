import { User } from "@prisma/client";
import * as wifiRepository from "../repositories/wifiRepository.js";
import { decrypt } from "../util/crypt.js";
import { encrypt } from "../util/crypt.js";
import { TypeWifiData } from "../types/WifiTypes.js";

export async function getOneWifi(userId: number, wifiId: number) {
  const wifi = await wifiRepository.getOneWifi(userId, wifiId);
  if (!wifi) {
    throw { type: "not_found" };
  }
  return {
    ...wifi,
    password: decrypt(wifi.password),
  };
}

export async function getAllWifis(userId: number) {
  const wifis = await wifiRepository.getAllWifis(userId);
  return wifis.map((wifi) => {
    return { ...wifi, password: decrypt(wifi.password) };
  });
}

export async function createWifi(user: User, wifi: TypeWifiData) {
  const wifiData = { ...wifi, password: encrypt(wifi.password) };
  await wifiRepository.createWifi(user.id, wifiData);
}

export async function deleteAllWifi(user: User, wifiId: number) {
  await getOneWifi(user.id, wifiId);
  await wifiRepository.deleteWifi(wifiId);
}
