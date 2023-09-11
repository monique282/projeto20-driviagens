// essa pasta é chamada la em routes
// ela chama a servises

import httpStatus from "http-status";
import { flightsServices } from "../services/flightsServices.js";

// função que envia os dados da viagem como origem ,destino e data de voo
export async function flightsPost(req, res) {

    // pegando os dados enviados pelo body
    const { origin, destination, date } = req.body;
    console.log(origin, destination, date)

    // fazendo a verificação se ta tudo certo
    const result = await flightsServices.flightsPost(origin, destination, date);

    // se tudo der certo
    res.sendStatus(httpStatus.OK);
};

// função que pega os dados de da viagem como destino partida e data de voo
export async function flightsGet(req, res) {

    // dados enviados pela query
    const {
        origin,
        destination,
        'smaller-date': smallerDate,
        'bigger-date': biggerDate } = req.query;

    // fazendo a verificação se ta tudo certo
    const result = await flightsServices.flightsGet(origin, destination, smallerDate, biggerDate);

    // se tudo der certo
    res.send(result).status(httpStatus.OK);
};