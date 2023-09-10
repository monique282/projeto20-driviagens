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
async function flightsGet(origin, destination) {

    let sql = `
SELECT 
    flights.id AS id,
    origin.name AS origin,
    destination.name AS destination,
    TO_CHAR(flights.date, 'DD-MM-YYYY') AS formatted_date
FROM flights
JOIN cities AS origin ON flights.origin = origin.id
JOIN cities AS destination ON flights.destination = destination.id
`;

    // colocando os parametros
    const values = []

    // se existir a vontade de ordenar origem
    if (origin) {
        sql += `WHERE origin.name = $1`;
        values.push(origin);
    }

    // se existir a vontade de ordenar destination
    if (destination) {
        sql += `WHERE destination.name = $1`;
        values.push(destination);
    }
    // adicionando a ordenação por cidade
    sql += ' ORDER BY flights.date';

    const serveSend = await db.query(sql, values);
    return serveSend.rows;
};

export const flightsRepository = { flightsPost, idflightsGet, flightsGet }