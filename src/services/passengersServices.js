import { errors } from "../errors/allMistakes.js";
import { passengersRepository } from "../repositories/passengersRepository.js";

async function passengersPost(firstName, lastName) {

   if (!firstName || firstName === "") {
      throw errors.notFound("Nome")
   }
   if (!lastName || lastName === "") {
      throw errors.notFound("Sobre-nome")
   }


   const result = await passengersRepository.passengersPost(firstName, lastName);
   return result;
}

export const passengersServices = { passengersPost }