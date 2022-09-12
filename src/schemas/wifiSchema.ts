import joi from "joi";
import { TypeWifiData } from "../types/WifiTypes.js";

export const wifiSchema = joi.object<TypeWifiData>({
  title: joi.string().required(),
  wifi: joi.string().required(),
  password: joi.string().required(),
});
