// essa função é chamada la la no sevises

import { db } from "../dataBase/databaseConnection.js";


// função que envia para o banco o nome e o sobre nome do passageiro
async function flightsPost(origin, destination, date) {
    const serveSend = await db.query('INSERT INTO flights ( origin, destination, date) VALUES ($1, $2, $3)', [origin, destination, date]);
    return serveSend;
};

//função pra pegar o voo por id
async function idflightsGet(id) {

    const serveSend = await db.query('SELECT * FROM flights WHERE id = $1;', [id]);
    return serveSend.rows;
};

// função que pega dos dados do banco
async function flightsGet() {
    const serveSend = await db.query(`
    SELECT 
    flights.id AS id,
    origin.name AS origin,
    destination.name AS destination,
    TO_CHAR(flights.date, 'DD-MM-YYYY') AS date
    FROM flights
    JOIN cities AS origin ON flights.origin = origin.id
    JOIN cities AS destination ON flights.destination = destination.id;
`);
    return serveSend.rows;
};

export const flightsRepository = { flightsPost, idflightsGet, flightsGet }