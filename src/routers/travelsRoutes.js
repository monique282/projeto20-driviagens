import { Router } from "express";
import { registerTable } from "../schemas/ciFliPaTrSchema.js";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { registerPost } from "../controllers/controlUsers.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateJoiForAll(registerTable), registerPost);

export default travelsRouter;