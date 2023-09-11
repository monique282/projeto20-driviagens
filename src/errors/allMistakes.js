
// esse arquivo serve para colocar os erros chamando com o comando throw

//404
export function notFound(item = "Item") {
    return {
        type: "notFound",
        message: `${item} não encontrado(a)`
    };
};

//409
export function conflict(item = "Item") {
    return {
        type: "conflict",
        message: `${item} está em conflito pois ja foi adicionada`
    };
};

//409
export function equalConflicts() {
    return {
        type: "conflict",
        message: `Origem e destino não podem ser iguais`
    };
};

//422
export function UnprocessableEntity(item) {
    return {
        type: "Unprocessable Entity",
        message: `${item}`
    };
};

//400
export function BadRequest(item) {
    return {
        type: "Bad request",
        message: `${item}`
    };
};

//500
export function intervalServerError(item) {
    return {
        type: "internal server error",
        message: `${item}`
    };
};

export const errors = {
    notFound, conflict, UnprocessableEntity,
    equalConflicts, BadRequest, intervalServerError
};