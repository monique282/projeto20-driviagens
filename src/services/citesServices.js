
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { errors } from "../errors/allMistakes.js";
import { citesRepository } from "../repositories/citesRepository.js";

async function citesPost(name) {
   const thereIsCity = await citesRepository.citesNameGet(name);
   if(thereIsCity.length !== 0){
      throw errors.conflict(name);
   }

    const result = await citesRepository.citesPost(name);
   return result;
}

export const citesServices = { citesPost }