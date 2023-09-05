// esse arquivo serve pra unir todos que eu estou escrevendo Rotas que esta dentro de Routes
// lebrando que todas as Rotas aqui vai pro app

import { Router } from "express";
import citiesRouter from "./citiesRoutes.js";
import passengrsRouter from "./passengersRoutes.js";
import travelsRouter from "./travelsRoutes.js";

const router = Router()

router.use([
    //rotas das cidades
    citiesRouter,

    // rotas sobre passagens
    passengrsRouter,

    //rotas de vools
    travelsRouter
]);

export default router;
