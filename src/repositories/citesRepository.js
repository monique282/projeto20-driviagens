import { db } from "../dataBase/databaseConnection.js";

// função que envia para o banco o nome da cidade
// ela pe chamada la no sevice

// essa função e pra adicionar a cidades no banco
async function citesPost(name) {

    const serveSend = await db.query('INSERT INTO cities (name) VALUES ($1)', [name]);
    return serveSend;
};

// essa função é pra pegar toas as cidade ja aciodopnadas no banco

async function citesGetName(name){

    const citesNameResult = await db.query('SELECT * FROM cities WHERE name = $1;' [name]);
    return citesNameResult;
}


export const citesRepositoy = { citesPost , citesGetName}