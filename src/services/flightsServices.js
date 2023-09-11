
// essa pasta serve para poder tratar os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import { UnprocessableEntity, errors } from "../errors/allMistakes.js";
import { citesRepository } from "../repositories/citesRepository.js";
import { flightsRepository } from "../repositories/flightsRepository.js";
import { flightsGetTable } from "../schemas/ciFliPaTrSchema.js";
dayjs.extend(customParseFormat);

function formatDateToYYYYMMDD(date) {
    console.log(date)
    const parts = date.split('-');
    if (parts.length === 3) {
      const [dia, mes, ano] = parts;
      return `${ano}-${mes}-${dia}`;
    }
    return null; 
  }

//função para enviar pro banco os dados de origem destino e data
async function flightsPost(origin, destination, date) {
    console.log(origin, destination, date)

    // verificando se a cidade de origin existe na tabela de cidades
    const thereIsCityOrigin = await citesRepository.citesIdGet(origin);

    // se existe
    if (thereIsCityOrigin.length === 0) {
        throw errors.notFound("Cidade");
    };

    // verificando se a cidade de destino existe na tabela de cidades
    const thereIsCityDestination = await citesRepository.citesIdGet(destination);

    // se existe
    if (thereIsCityDestination.length === 0) {
        throw errors.notFound("Cidade ");
    };

    //verificando se origem e destino são iguais
    if (origin === destination) {
        // se forem iguais tem que dar conflito
        throw errors.equalConflicts();
    };

    // preciso verificar se a data do voo é no futuro
    // pegando a data atual
    const currentDate = dayjs();
    
    // transformando a informação da data passada pelo usuario para a data
    const format = formatDateToYYYYMMDD(date)
    const flightDate = dayjs(format, 'YYYY-MM-DD');
    console.log(flightDate)
    // verificando de a data do voo é anterior a data atual
    // se for
    if (flightDate.isBefore(currentDate)) {
        // se a data do voo não for maior que a data atual
        throw errors.UnprocessableEntity("A data do voo deve ser maior do que a data atual.");
    };

    //se tudo cer certo vou enviar os dados para o baco
    const result = await flightsRepository.flightsPost(origin, destination, format);
    return result;
};

//função para pegar as informações de nome e sobreno de usuario junto com a quantidade que cada usuario de de voos registrados
async function flightsGet(origin, destination, smallerDate, biggerDate) {

    //validando se as datas estão no formato esperado
    const { error: errorDateSmallerDate } = flightsGetTable.validate(smallerDate);
    const { error: errorDateBiggerDate } = flightsGetTable.validate(biggerDate);

    // verificando se o formato das datas estão ok
    // não esta
    if (errorDateSmallerDate || errorDateBiggerDate) {
        throw UnprocessableEntity("Formado de data invalida")
    };

    // verificar de a data smallerDate > biggerDate
    // transformando a informação pelo usuario smallerDate, para uma data
    const format = formatDateToYYYYMMDD(smallerDate)
    const currentDate = dayjs(format, 'YYYY-MM-DD');

    // transformando a informação pelo usuario biggerDate, para uma data
    const format2 = formatDateToYYYYMMDD(biggerDate)
    const flightDate = dayjs(format2, 'YYYY-MM-DD');


    // verificando se a data do voo é anterior a data atual
    // se é
    if (flightDate.isBefore(currentDate)) {

        // se a data do voo for no passado
        throw errors.UnprocessableEntity("A data inicial tem que ser maior que a data final.");
    };

    //verificar se smallerDate e biggerDate foram passados
    if (smallerDate && !biggerDate || !smallerDate && biggerDate) {

        // somente smallerDate não foi passado
        if (!smallerDate) {
            throw errors.BadRequest("Se deseja fazer o filtro usando um periodo de data informe a data menor")
        };

        // somente biggerDate não foi passado
        if (!biggerDate) {
            throw errors.BadRequest("Se deseja fazer o filtro usando um periodo de data informe a data maior")
        };
    };

    //se tudo der certo vou enviar os dados para o banco
    const result = await flightsRepository.flightsGet(origin, destination, smallerDate, biggerDate);
    return result;
}

export const flightsServices = { flightsPost, flightsGet };