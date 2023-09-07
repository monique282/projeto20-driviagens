import { db } from "../dataBase/databaseConnection.js";

// função que envia para o banco o nome da cidade
// ela pe chamada la no sevice

async function citesPost(name) {

    const serveSend = await db.query('INSERT INTO cities (name) VALUES ($1)', [name]);
    return serveSend;
};

export const citesRepositoy = { citesPost }