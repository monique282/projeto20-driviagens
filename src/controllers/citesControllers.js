// essa gunção é chamada la na rota
// ela chama a servises

import httpStatus from "http-status";
import { citesServices } from "../services/citesServices.js";


// função que pega os dados de das cidades de partida e chegada
export async function citesPost(req, res) {

    // pegando os dados enviados pelo body
    const { name } = req.body;
   
        // fazendo a requisição enviar o nome da cidade para o banco
        const result = await citesServices.citesPost(name);

        // se tudo der certo
        res.sendStatus(httpStatus.NO_CONTENT);
        
}