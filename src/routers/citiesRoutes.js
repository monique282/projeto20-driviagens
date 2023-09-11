// essa pasta é pra reunir todas as rotas relacionas a cidade

import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { citiesTable } from "../schemas/ciFliPaTrSchema.js";
import { citesPost } from "../controllers/citesControllers.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateJoiForAll(citiesTable), citesPost);

export default citiesRouter;