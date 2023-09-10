// essa pasta é chamada la em routes
// ela chama a servises

import httpStatus from "http-status";
import { flightsServices } from "../services/flightsServices.js";

// função que pega os dados de da viagem como destino partida e data de voo
export async function flightsPost(req, res) {

    // pegando os dados enviados pelo body
    const { origin, destination, date } = req.body;
   
    // fazendo a verificação se ta tudo certo
    const result = await flightsServices.flightsPost(origin, destination, date);
   
    // se tudo der certo
    res.sendStatus(httpStatus.NO_CONTENT);

}

// função que pega os dados de da viagem como destino partida e data de voo
export async function flightsGet(req, res) {

    const origin = req.query.origin
   
    // fazendo a verificação se ta tudo certo
    const result = await flightsServices.flightsGet(origin);
   
    // se tudo der certo
    res.send(result).status(httpStatus.NO_CONTENT);

}