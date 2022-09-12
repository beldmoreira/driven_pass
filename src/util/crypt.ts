import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import cryptr from "cryptr";

export function encrypt(value: string) {
  return cryptr.encrypt(value);
}

export function decrypt(encryptedValue: string) {
  return cryptr.decrypt(encryptedValue);
}
