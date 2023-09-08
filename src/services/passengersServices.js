import { errors } from "../errors/allMistakes.js";
import { firstNameLastRepositoy } from "../repositories/passengersRepository.js";

 async function firstNameLastNamePost(firstName, lastName){

   if(!firstName || firstName === "" ){
      throw errors.notFound("Nome")
   }
   if(!lastName || lastName === ""){
    throw allMistakes.notFound("Sobre-nome")
 }


    const result = await firstNameLastRepositoy.firstNameLastNamePost (firstName, lastName);
    return result;
 }

 export const firstNameLastServices = {firstNameLastNamePost}