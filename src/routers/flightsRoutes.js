import { Router } from "express";
import { registerTable } from "../schemas/userSchema.js";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { registerPost } from "../controllers/controlUsers.js";

const flightsRouter = Router();

flightsRouter.post("/flights", validateJoiForAll(registerTable), registerPost);
flightsRouter.get("/flights", registerPost);

export default flightsRouter;