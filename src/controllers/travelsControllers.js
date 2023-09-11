// essa pasta é chamada la em routes
// ela chama a servises

import httpStatus from "http-status";
import { travelsServices } from "../services/travelsServices.js";

// função que envia os dados de da viagem como id do passsageiro e is do voo
export async function travelsPost(req, res) {

    // pegando os dados enviados pelo body
    const { passengerId, flightId } = req.body;
    
    // fazendo a verificação se ta tudo certo
    const result = await travelsServices.travelsPost(passengerId, flightId);

    // se tudo der certo
    res.sendStatus(httpStatus.OK);
}