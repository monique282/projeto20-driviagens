import { Router } from "express";
import { registerTable } from "../schemas/userSchema.js";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { registerPost } from "../controllers/controlUsers.js";

const citiesRouter = Router();

citiesRouter.post("/cities", validateJoiForAll(registerTable), registerPost);

export default citiesRouter;