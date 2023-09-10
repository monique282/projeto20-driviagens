import { Router } from "express";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { travelsPost } from "../controllers/travelsControllers.js";
import { travelsTable } from "../schemas/ciFliPaTrSchema.js";

const travelsRouter = Router();

travelsRouter.post("/travels", validateJoiForAll(travelsTable), travelsPost);

export default travelsRouter;