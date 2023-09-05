import { Router } from "express";
import { registerTable } from "../schemas/userSchema.js";
import { validateJoiForAll } from "../middlewares/validateSchema.js";
import { registerPost } from "../controllers/controlUsers.js";

const passengrsRouter = Router();

passengrsRouter.post("/passengers", validateJoiForAll(registerTable), registerPost);
passengrsRouter.get("/passengers/travels", registerPost);

export default passengrsRouter;