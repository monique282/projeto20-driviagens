import { db } from "../dataBase/databaseConnection.js";


// função que envia para o banco o nome e o sobre nome do passageiro
async function firstNameLastNamePost(firstName, lastName) {

    const serveSend = await db.query('INSERT INTO passengers ( "firstName" ,"lastName") VALUES ($1, $2)', [firstName, lastName]);
    return serveSend;
};



export const passengersRepository = { firstNameLastNamePost, idPassengersGet }