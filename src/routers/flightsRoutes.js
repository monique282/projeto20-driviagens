import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { flightsTable } from "../schemas/ciFliPaTrSchema.js";
import { flightsPost } from "../controllers/flightsControllers.js";


const flightsRouter = Router();

flightsRouter.post("/flights", validateJoiForAll(flightsTable), flightsPost);
flightsRouter.get("/flights",flightsGet );

export default flightsRouter;