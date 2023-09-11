// essa função é pra reunuir todas as rotas relacionadas a passageiros

import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { passengersTable } from "../schemas/ciFliPaTrSchema.js";
import { passengersGet, passengersPost } from "../controllers/passengersControllers.js";

const passengrsRouter = Router();

passengrsRouter.post("/passengers", validateJoiForAll(passengersTable), passengersPost);
passengrsRouter.get("/passengers/travels", passengersGet);

export default passengrsRouter;