// essa pasta é chamada la em routes
// ela chama a servises

import httpStatus from "http-status";
import { passengersServices } from "../services/passengersServices.js";

// função que pega os dados de nome e sobrenome
export async function passengersPost(req, res) {

    // pegando os dados enviados pelo body
    const { firstName, lastName } = req.body;

    // fazendo a requisição enviar o nome e sobrenome para o banco
    const result = await passengersServices.passengersPost(firstName, lastName);
   
    // se tudo der certo
    res.sendStatus(httpStatus.NO_CONTENT);

}