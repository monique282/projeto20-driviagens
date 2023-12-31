// essa função é pra reonuir todas as rotas relacionadas a voos

import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { flightsTable } from "../schemas/ciFliPaTrSchema.js";
import { flightsGet, flightsPost } from "../controllers/flightsControllers.js";


const flightsRouter = Router();

flightsRouter.post("/flights", validateJoiForAll(flightsTable), flightsPost);
flightsRouter.get("/flights", flightsGet);

export default flightsRouter;