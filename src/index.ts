import dotenv from "dotenv";
import express, { json } from "express";
import "express-async-errors";
import handleErrorsMiddleware from "./middlewares/errorHandlerMiddleware.js";
import router from "./routes/index.js";

dotenv.config();
const app = express();
app.use(json());
app.use(router);
app.use(handleErrorsMiddleware);

const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => {
  console.log(`Server up and running on port ${PORT}`);
});
