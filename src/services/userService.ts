import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userRepository from "../repositories/userRepository.js";
import { TypeUserData } from "../types/UserTypes.js";

export async function createUser(user: TypeUserData) {
  const email = await userRepository.findByEmail(user.email);
  if (email) {
    throw { type: "conflict" };
  }
  const hashedPassword = bcrypt.hashSync(user.password, 12);
  await userRepository.createUser({ ...user, password: hashedPassword });
}

export async function findById(id: number) {
  const user = await userRepository.findById(id);
  if (!user) {
    throw { type: "not_found" };
  }
  return user;
}

export async function getUser(login: TypeUserData) {
  const user = await userRepository.findByEmail(login.email);
  if (!user) {
    throw { type: "not_found" };
  }

  const isPasswordCorrect = bcrypt.compareSync(login.password, user.password);
  if (!isPasswordCorrect) {
    throw { type: "unauthorized" };
  }
  return user;
}

export async function login(login: TypeUserData) {
  const user = await getUser(login);
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  return token;
}
