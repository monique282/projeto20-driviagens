import cors from "cors";
import express, { Router, json } from "express";
import dotenv from "dotenv";
import router from "./routers/indexRoutes.js";

//configuração da API
dotenv.config();

const app = express();

app.use(cors());
app.use(json());
app.use(router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
