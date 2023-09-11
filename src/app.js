import cors from "cors";
import express, { json } from "express";
import "express-async-errors";
import dotenv from "dotenv";
import router from "./routers/indexRoutes.js";
import errorHandler from "./middlewares/errorMiddlewares.js";

//configuração da API
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
