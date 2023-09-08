
// essa função serve para poder tratas os assuntos de serviços
// ela é chamada nos controles
// ela chama o repository

import { citesRepositoy } from "../repositories/citesRepository.js";

 async function citesPost(name){

   

    const result = await citesRepositoy.citesPost (name);
    return result;
 }

 export const citesServices = {citesPost}