// essa função é chamada la la no sevises

import { db } from "../dataBase/databaseConnection.js";


// função que envia para o banco o nome e o sobre nome do passageiro
async function passengersPost(firstName, lastName) {

    const serveSend = await db.query('INSERT INTO passengers ( "firstName" ,"lastName") VALUES ($1, $2);', [firstName, lastName]);
    return serveSend;
};

//função pra pegar o usuario por id
async function idPassengersGet(id) {

    const serveSend = await db.query('SELECT * FROM passengers WHERE id = $1;', [id]);
    return serveSend.rows;
};

export const passengersRepository = { passengersPost, idPassengersGet }