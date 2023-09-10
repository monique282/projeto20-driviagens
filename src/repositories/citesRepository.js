// essa função é chamada la la no sevises
// função que envia para o banco o nome da cidade

import { db } from "../dataBase/databaseConnection.js";

// essa função e pra adicionar a cidades no banco
async function citesPost(name) {
    
    const serveSend = await db.query('INSERT INTO cities (name) VALUES ($1)', [name]);
    return serveSend;
};

// essa função é pra pegar toas as cidade ja aciodonadas no banco
async function citesNameGet(name){

    const citesNameResult = await db.query('SELECT * FROM cities WHERE name = $1;', [name]);
    return citesNameResult.rows;
}

// essa função é pra pegar a cidade pelo id
async function citesIdGet(id){

    const citesNameResult = await db.query('SELECT * FROM cities WHERE id = $1;', [id]);
    return citesNameResult.rows;
}


export const citesRepository = { citesPost , citesNameGet, citesIdGet}