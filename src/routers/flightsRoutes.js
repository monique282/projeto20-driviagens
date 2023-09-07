import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";


const flightsRouter = Router();

flightsRouter.post("/flights", validateJoiForAll());
flightsRouter.get("/flights");

export default flightsRouter;