// essa gunção é chamada la na rota

import { firstNameLastServices } from "../services/passengersServices.js";

// função que pega os dados de nome e sobrenome
export async function firstNameLastNamePost(req, res) {

    // pegando os dados enviados pelo body
    const { firstName, lastName } = req.body;

        // fazendo a requisição enviar o nome e sobrenome para o banco
        const result = await firstNameLastServices.firstNameLastNamePost(firstName, lastName);
        // se tudo der certo
        res.sendStatus(httpStatus.NO_CONTENT);

}