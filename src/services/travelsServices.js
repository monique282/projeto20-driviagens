
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { errors } from "../errors/allMistakes.js";
import { passengersRepository } from "../repositories/passengersRepository.js";

async function travelsPost(passengerId, flightId) {
   
   const thereIsCity = await passengersRepository.idPassengersGet(passengerId);
   if(thereIsCity.length !== 0){
      throw errors.notFound();
   }

    const result = await travelsRepository.travelsPost(passengerId, flightId);
   return result;
}

export const travelsServices = { travelsPost }