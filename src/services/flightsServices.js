
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import { UnprocessableEntity, errors } from "../errors/allMistakes.js";
import { citesRepository } from "../repositories/citesRepository.js";
import { flightsRepository } from "../repositories/flightsRepository.js";
import { flightsGetTable } from "../schemas/ciFliPaTrSchema.js";
dayjs.extend(customParseFormat);

async function flightsPost(origin, destination, date) {

    // verificando se a cidade de origin existe na tabela de cidades
    const thereIsCityOrigin = await citesRepository.citesIdGet(origin);
    if (thereIsCityOrigin.length === 0) {
        throw errors.notFound("A cidade");
    }

    // verificando se a cidade de destino existe na tabela de cidades
    const thereIsCityDestination = await citesRepository.citesIdGet(destination);
    if (thereIsCityDestination.length === 0) {
        throw errors.notFound("A cidade ");
    }

    //verificando de origem e destino são iguais
    if (origin === destination) {
        // se forem iguais tem que dar conflito
        throw errors.equalConflicts();
    }

    // preciso verificar se a data do voo é no futuro
    // pegando a data atual
    const currentDate = dayjs().format('DD-MM-YYYY');

    // transformando a informação da data passada pelo usuario para a data
    const flightDate = dayjs(date, 'DD-MM-YYYY');

    // verificando de a data do voo é anterior a data atual
    if (flightDate.isBefore(currentDate)) {
        // se a data do voo não for maior que a data atual
        throw errors.UnprocessableEntity("A data do voo deve ser maior do que a data atual.");
    }

    //se tudo cer certo vou enviar os dados para o baco
    const result = await flightsRepository.flightsPost(origin, destination, date);
    return result;

}

async function flightsGet(origin, destination, smallerDate, biggerDate) {

    const { error: errorDateSmallerDate } = flightsGetTable.validate(smallerDate)
    const { error: errorDateBiggerDate } = flightsGetTable.validate(biggerDate)

    // verificando de o o formato das datas estão ok
    if (errorDateSmallerDate || errorDateBiggerDate) {
        throw UnprocessableEntity("Formado de data invalida")
    }

    // verificar de a data smallerDate > biggerDate

    // transformando a informação da data passada smallerDate pelo usuario
    const currentDate = dayjs(smallerDate, 'DD-MM-YYYY');

    // transformando a informação da data passada biggerDate pelo usuario
    const flightDate = dayjs(biggerDate, 'DD-MM-YYYY');

    // verificando de a data do voo é anterior a data atual
    if (flightDate.isBefore(currentDate)) {
        // se a data do voo não for maior que a data atual
        throw errors.UnprocessableEntity("A data inicial tem que ser maior que a data final.");
    }

    //se tudo cer certo vou enviar os dados para o baco
    const result = await flightsRepository.flightsGet(origin, destination, smallerDate, biggerDate);
    return result;
}

export const flightsServices = { flightsPost, flightsGet }