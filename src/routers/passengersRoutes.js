import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { registerPost } from "../controllers/controlUsers.js";
import { passengersTable } from "../schemas/ciFliPaTrSchema.js";

const passengrsRouter = Router();

passengrsRouter.post("/passengers", validateJoiForAll(passengersTable), registerPost);
passengrsRouter.get("/passengers/travels", registerPost);

export default passengrsRouter;