
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { errors } from "../errors/allMistakes.js";
import { citesRepositoy } from "../repositories/citesRepository.js";

async function citesPost(name) {
   
   const thereIsCity = await citesRepositoy.citesNameGet(name);
   if(thereIsCity.length !== 0){
      throw errors.conflict(name);
   }

    const result = await citesRepositoy.citesPost(name);
   return result;
}

export const citesServices = { citesPost }