import { db } from "../dataBase/databaseConnection.js";

 
 // função que envia para o banco o nome e o sobre nome do passageiro
 async function flightsPost(origin, destination, date){
 
      const serveSend = await db.query('INSERT INTO flights ( origin, destination, date) VALUES ($1, $2, $3)', [origin, destination, date]);
      return serveSend;
  };
  
 export const flightsRepository = {flightsPost}