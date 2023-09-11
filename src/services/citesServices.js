
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { errors } from "../errors/allMistakes.js";
import { citesRepository } from "../repositories/citesRepository.js";

// função para verificas ja existe uma cidade com aquele nome cadastrado
async function citesPost(name) {
   const thereIsCity = await citesRepository.citesNameGet(name);

   // pegando a requicição e vendo se ja existe a cidade
   if(thereIsCity.length !== 0){
      throw errors.conflict(name);
   }

   // se tudo der certo
    const result = await citesRepository.citesPost(name);
   return result;
};

export const citesServices = { citesPost };