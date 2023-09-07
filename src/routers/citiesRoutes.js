import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { citiesTable } from "../schemas/ciFliPaTrSchema.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateJoiForAll(citiesTable));

export default citiesRouter;