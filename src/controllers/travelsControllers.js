import httpStatus from "http-status";
import { flightsServices } from "../services/flightsServices.js";


// função que pega os dados de da viagem como destino partida e data de voo
export async function travelsPost(req, res) {

    // pegando os dados enviados pelo body
    const { passengerId, flightId } = req.body;

    // fazendo a verificação se ta tudo certo
    const result = await travelsServices.travelsPost(passengerId, flightId );

    // se tudo der certo
    res.sendStatus(httpStatus.NO_CONTENT);

}