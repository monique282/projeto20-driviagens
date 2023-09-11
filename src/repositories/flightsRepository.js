// essa função é chamada la no sevises

import { db } from "../dataBase/databaseConnection.js";

// função que envia para o banco o nome e o sobre nome do passageiro
async function flightsPost(origin, destination, date) {

    const serveSend = await db.query('INSERT INTO flights ( origin, destination, date) VALUES ($1, $2, $3);', [origin, destination, date]);
    return serveSend;
};

//função pra pegar o voo buscando pelo id
async function idflightsGet(id) {

    const serveSend = await db.query('SELECT * FROM flights WHERE id = $1;', [id]);
    return serveSend.rows;
};

// função que pega dos dados do banco
async function flightsGet(origin, destination, smallerDate, biggerDate) {

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
    const values = [];

    // contador 
    let paramCount = 0;

    // se existir a vontade de ordenar origem
    if (origin) {
        paramCount++;
        sql += ` WHERE origin.name = $${paramCount}`;
        values.push(origin);
    };

    // se existir a vontade de ordenar destination
    if (destination) {
        paramCount++;
        if (paramCount > 1) {
            sql += ` AND destination.name = $${paramCount}`;
        } else {
            sql += ` WHERE destination.name = $${paramCount}`;
        };
        values.push(destination);
    };

    // procurar por periodo de data
    if (smallerDate && biggerDate) {
        paramCount += 2;
        if (paramCount > 2) {
            sql += ` AND flights.date >= $${paramCount - 1} AND flights.date <= $${paramCount}`;
        } else {
            sql += ` WHERE flights.date >= $${paramCount - 1} AND flights.date <= $${paramCount}`;
        };
        values.push(smallerDate, biggerDate);
    };

    // adicionando a ordenação por cidade
    sql += ' ORDER BY flights.date';

    // se tudo der certp
    const serveSend = await db.query(sql, values);
    return serveSend.rows;
};

export const flightsRepository = { flightsPost, idflightsGet, flightsGet };