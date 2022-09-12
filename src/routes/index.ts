import { Router } from "express";
import credentialRouter from "./credentialRouter.js";
import userRouter from "./userRouter.js";
import safeNoteRouter from "./safeNoteRouter.js";
import cardRouter from "./cardRouter.js";
import wifiRouter from "./wifiRouter.js";

const router = Router();
router.use(credentialRouter);
router.use(userRouter);
router.use(safeNoteRouter);
router.use(cardRouter);
router.use(wifiRouter);

export default router;
