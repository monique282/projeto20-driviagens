import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateJoiForAll());

export default travelsRouter;