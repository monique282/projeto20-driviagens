import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { flightsTable } from "../schemas/ciFliPaTrSchema.js";


const flightsRouter = Router();

flightsRouter.post("/flights", validateJoiForAll(flightsTable));
flightsRouter.get("/flights");

export default flightsRouter;