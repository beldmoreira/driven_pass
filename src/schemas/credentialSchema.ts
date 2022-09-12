import joi from "joi";
import { TypeCredentialData } from "../types/CredentialTypes";

export const credentialSchema = joi.object<TypeCredentialData>({
  title: joi.string().required(),
  url: joi.string().required(),
  username: joi.string().required(),
  password: joi.string().required(),
});
