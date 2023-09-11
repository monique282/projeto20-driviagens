// esse arquivo serve pra unir todos que eu estou escrevendo Rotas que esta dentro de Routes
// lebrando que todas as Rotas aqui vai pro app

import { Router } from "express";
import citiesRouter from "./citiesRoutes.js";
import passengrsRouter from "./passengersRoutes.js";
import travelsRouter from "./travelsRoutes.js";
import flightsRouter from "./flightsRoutes.js";

const router = Router()

router.use([
    //rotas das cidades
    citiesRouter,

    // rotas sobre passagens
    passengrsRouter,

    //rotas de viagem
    travelsRouter,

    //rotas de voos
    flightsRouter
]);

export default router;
