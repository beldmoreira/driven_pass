import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cryptr from "cryptr";

export async function encryptPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);
  return hashPassword;
}

export async function encrypt(data: string) {
  const encryptedData = cryptr.encrypt(data);
  return encryptedData;
}

export async function decrypt(encrypted: string) {
  const decryptedData = cryptr.decrypt(encrypted);
  return decryptedData;
}

export async function checkToken(token: string) {
  const secretKey = process.env.JWT_SECRET;
  const check = jwt.verify(token, secretKey);
  return check;
}
