import { errors } from "../errors/allMistakes.js";
import { passengersRepository } from "../repositories/passengersRepository.js";

 async function firstNameLastNamePost(firstName, lastName){

   if(!firstName || firstName === "" ){
      throw errors.notFound("Nome")
   }
   if(!lastName || lastName === ""){
    throw errors.notFound("Sobre-nome")
 }


    const result = await passengersRepository.firstNameLastNamePost (firstName, lastName);
    return result;
 }

 export const firstNameLastServices = {firstNameLastNamePost}