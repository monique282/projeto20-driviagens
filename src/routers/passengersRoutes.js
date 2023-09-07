import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { passengersTable } from "../schemas/ciFliPaTrSchema.js";
import { firstNameLastNamePost } from "../controllers/passengersControllers.js";

const passengrsRouter = Router();

passengrsRouter.post("/passengers", validateJoiForAll(passengersTable), firstNameLastNamePost);
//passengrsRouter.get("/passengers/travels", registerPost);

export default passengrsRouter;