
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { errors } from "../errors/allMistakes.js";
import { flightsRepository } from "../repositories/flightsRepository.js";
import { passengersRepository } from "../repositories/passengersRepository.js";

async function travelsPost(passengerId, flightId) {

   // verificar de o passageiro existe no banco
   const thereIsCity = await passengersRepository.idPassengersGet(passengerId);
   if (thereIsCity.length === 0) {
      throw errors.notFound("Passageiro(a)");
   }

   // verificar se o voo existe no banco
   const thereIsflights = await flightsRepository.flightId(flightId);
   if (thereIsflights.length === 0) {
      throw errors.notFound("Reserva de voo");
   }

   const result = await travelsRepository.travelsPost(passengerId, flightId);
   return result;
}

export const travelsServices = { travelsPost }