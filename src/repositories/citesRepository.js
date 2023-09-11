// essa função é chamada la no sevises

import { db } from "../dataBase/databaseConnection.js";

// essa função e pra adicionar a cidade no banco
async function citesPost(name) {
    
    const serveSend = await db.query('INSERT INTO cities (name) VALUES ($1);', [name]);
    return serveSend;
};

// essa função é pra pegar todas as cidade buscando pelo nome 
async function citesNameGet(name){

    const citesNameResult = await db.query('SELECT * FROM cities WHERE name = $1;', [name]);
    return citesNameResult.rows;
};

// essa função é pra pegar a cidade buscando pelo id
async function citesIdGet(id){

    const citesNameResult = await db.query('SELECT * FROM cities WHERE id = $1;', [id]);
    return citesNameResult.rows;
};


export const citesRepository = { citesPost , citesNameGet, citesIdGet};