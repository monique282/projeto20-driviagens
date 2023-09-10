// essa função é chamada la la no sevises

import { db } from "../dataBase/databaseConnection.js";


// função que envia para o banco os dados da viagem
async function travelsPost(passengerId, flightId) {

    const serveSend = await db.query(`INSERT INTO travels ("passengerId", "flightId") VALUES ($1, $2);`, [passengerId, flightId]);

    return serveSend;
};

export const travelsRepository = { travelsPost }