// essa função é chamada la no sevises

import { db } from "../dataBase/databaseConnection.js";
import { errors } from "../errors/allMistakes.js";

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

// função que pega do banco o nome do passageiro e a quantidade de vools
async function passengersGet(name) {

    // fazendo o limiti
    const limit = 10;

    // comando sql
    let serveSend = '';

    if (name) {
        const query = `
    SELECT
        CONCAT("passengers"."firstName", ' ', "passengers"."lastName") AS passenger,
        COALESCE(COUNT("travels".id), 0) AS travels
    FROM "passengers"
    LEFT JOIN "travels" ON "passengers".id = "travels"."passengerId"
    WHERE "passengers"."firstName" || ' ' || "passengers"."lastName" ILIKE $1
    GROUP BY "passengers".id, "passengers"."firstName", "passengers"."lastName"
    ORDER BY travels DESC
    LIMIT $2;
  `
        const nameFilter = `%${name}%`;
        serveSend = await db.query(query, [nameFilter, limit]);
    } else {
        const query = `
    SELECT
        CONCAT("passengers"."firstName", ' ', "passengers"."lastName") AS passenger,
        COALESCE(COUNT("travels".id), 0) AS travels
    FROM "passengers"
    LEFT JOIN "travels" ON "passengers".id = "travels"."passengerId"
    GROUP BY "passengers".id, "passengers"."firstName", "passengers"."lastName"
    ORDER BY travels DESC
    LIMIT $1;  
    `
        serveSend = await db.query(query, [limit]);
    }

    // verificando se o numero de linhas for maior que 10
    if (serveSend.rows.length > limit) {
        throw errors.intervalServerError("Too many results")
    }

    return serveSend.rows;
};

export const passengersRepository = { passengersPost, idPassengersGet, passengersGet }