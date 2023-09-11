import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { passengersTable } from "../schemas/ciFliPaTrSchema.js";
import { passengersPost } from "../controllers/passengersControllers.js";

const passengrsRouter = Router();

passengrsRouter.post("/passengers", validateJoiForAll(passengersTable), passengersPost);
passengrsRouter.get("/passengers/travels");

export default passengrsRouter;