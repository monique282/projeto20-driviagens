
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import dayjs from "dayjs";
import { errors } from "../errors/allMistakes.js";

async function flightsPost(origin, destination, date) {

    // verificando se a cidade de origin existe na tabela de cidades
    const thereIsCityOrigin = await citesRepositoy.citesIdGet(origin);
    if (thereIsCityOrigin.length === 0) {
        throw errors.notFound(origin);
    }

    // verificando se a cidade de destino existe na tabela de cidades
    const thereIsCityDestination = await citesRepositoy.citesIdGet(destination);
    if (thereIsCityDestination.length === 0) {
        throw errors.notFound(destination);
    }

    //verificando de origem e destino são iguais
    if (origin === destination) {
        // se forem iguais tem que dar conflito
        throw errors.equalConflicts();
    }

    // preciso verificar se a data do voo é no futuro
    // pegando a data atual
    const currentDate = dayjs().format('DD-MM-YYYY');

    // tranformanfo a informação da data passada pelo usuario para a data
    const flightDate = dayjs(date, 'DD-MM-YYYY');

    // verificando de a data do voo é anterior a data atual
    if (flightDate.isBefore(currentDate)) {
        // se a data do voo não for maior que a data atual
        throw errors.UnprocessableEntity();
    }

    

    return result;
}

export const flightsServices = { flightsPost }