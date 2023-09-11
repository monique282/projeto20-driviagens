// essa pasta serve para poder tratar os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { errors } from "../errors/allMistakes.js";
import { passengersRepository } from "../repositories/passengersRepository.js";

async function passengersPost(firstName, lastName) {

   //verificando de os nomes e nobrenome não é valido
   // nome não valido
   if (!firstName || firstName === "") {
      throw errors.notFound("Nome");
   };

   // sobrenome não valido
   if (!lastName || lastName === "") {
      throw errors.notFound("Sobre-nome");
   };

// se tufo der certo enviar os dados pro banco
   const result = await passengersRepository.passengersPost(firstName, lastName);
   return result;
};

// função para pegar os dados dos passageiros
async function passengersGet(name) {

   // não tem nenhuma validação
   // ja que tudo deu certo
   const result = await passengersRepository.passengersGet(name);
   return result;
};

export const passengersServices = { passengersPost, passengersGet };