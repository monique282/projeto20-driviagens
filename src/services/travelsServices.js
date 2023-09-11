
// essa função serve para poder tratar os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { errors } from "../errors/allMistakes.js";
import { flightsRepository } from "../repositories/flightsRepository.js";
import { passengersRepository } from "../repositories/passengersRepository.js";
import { travelsRepository } from "../repositories/travelsRepository.js";

// essa função é para fazer um post das informaçẽis dos voos
async function travelsPost(passengerId, flightId) {
   
   // verificar de o passageiro existe no banco
   const thereIsCity = await passengersRepository.idPassengersGet(passengerId);

   //não existe
   if (thereIsCity.length === 0) {
      throw errors.notFound("Passageiro(a)");
   };

   // verificar se o voo existe no banco
   const thereIsflights = await flightsRepository.idflightsGet(flightId);

   // não existe
   if (thereIsflights.length === 0) {
      throw errors.notFound("Reserva de voo");
   };

   // se tudo der certo enviar os dados pro banco
   const result = await travelsRepository.travelsPost(passengerId, flightId);
   return result;
}

export const travelsServices = { travelsPost };