
// esse arquivo serve para colocar os erros quando der algum

export function notFound(item = "Item") {
    return {
        type: "notFound",
        message: `${item} não encontrado(a)`
    }
}

export function conflict(item = "Item") {
    return {
        type: "conflict",
        message: `${item} está em conflito pois ja foi adicionada`
    }
}

export function equalConflicts() {
    return {
        type: "conflict",
        message: `Origem e destino não podem ser iguais`
    }
}

export function UnprocessableEntity(item) {
    return {
        type: "Unprocessable Entity",
        message: `${item}`
    }
}



export const errors = { notFound, conflict, UnprocessableEntity, equalConflicts }