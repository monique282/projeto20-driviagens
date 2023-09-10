
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

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

    return result;
}

export const flightsServices = { flightsPost }