import { firstNameLastRepositoy } from "../repositories/passengersRepository.js";

 async function firstNameLastNamePost(firstName, lastName){

    const result = await firstNameLastRepositoy.firstNameLastNamePost (firstName, lastName);
    return result;
 }

 export const firstNameLastServices = {firstNameLastNamePost}