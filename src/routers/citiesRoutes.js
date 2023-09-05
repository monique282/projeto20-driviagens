import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { registerPost } from "../controllers/controlUsers.js";
import { citiesTable } from "../schemas/ciFliPaTrSchema.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateJoiForAll(citiesTable), registerPost);

export default citiesRouter;