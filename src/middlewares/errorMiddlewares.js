// essa pasta serve para eu reunir todos os erro em um so lugar 

import httpStatus from "http-status";

export default function  (error, req, res, next){

// erro de conflito
if(error.type === "conflict"){
    return res.status(httpStatus.CONFLICT).send(error.message);
}

// erro de "não encontrado"
if(error.type === "notFound"){
    return res.status(httpStatus.NOT_FOUND).send(error.message)
}

return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong")
}