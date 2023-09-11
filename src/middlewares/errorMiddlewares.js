// essa pasta serve para eu reunir todos os erro em um so lugar 

import httpStatus from "http-status";

export default function errorHandler (error, req, res, next){

// erro de conflito 409
if(error.type === "conflict"){
    return res.status(httpStatus.CONFLICT).send(error.message);
}

// erro de "não encontrado" 404
if(error.type === "notFound"){
    return res.status(httpStatus.NOT_FOUND).send(error.message)
}

// erro de "entidade nao processavel" 422
if(error.type === "Unprocessable Entity"){
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message)
}

// erro de "pedido ruis" 400
if(error.type === "Bad request"){
    return res.status(httpStatus.BAD_REQUEST).send(error.message)
}

return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong")
}