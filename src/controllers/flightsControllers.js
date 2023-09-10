import httpStatus from "http-status";


// função que pega os dados de da viagem como destino partida e data de voo
export async function flightsPost(req, res) {

    // pegando os dados enviados pelo body
    const { origin, destination, date } = req.body;

    // fazendo a requisição enviar os dados do voo para o banco
    const result = await flightsServices.citesPost(origin, destination, date);

    // se tudo der certo
    res.sendStatus(httpStatus.NO_CONTENT);

}