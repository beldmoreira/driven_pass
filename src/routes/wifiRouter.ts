import { Router } from "express";
import {
  createWifi,
  deleteWifi,
  getAllWifis,
  getWifi,
} from "../controllers/wifiController.js";
import joiValidation from "../middlewares/joiValidation.js";

import { wifiSchema } from "../schemas/wifiSchema.js";

const wifiRouter = Router();
wifiRouter.delete("/wifis/:id", deleteWifi);
wifiRouter.post("/wifis", joiValidation(wifiSchema), createWifi);
wifiRouter.get("/wifis", getAllWifis);
wifiRouter.get("/wifis/:id", getWifi);

export default wifiRouter;
