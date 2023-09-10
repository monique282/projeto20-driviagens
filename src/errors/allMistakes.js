
// esse arquivo serve para colocar os erros quando der algum

export function notFound(item = "Item") {
    return {
        type: "notFound",
        message: `${item} não foi encontrado`
    }
}

export function conflict(item = "Item") {
    return {
        type: "conflict",
        message: `${item} está em conflito pois ja foi adicionada`
    }
}



export const errors = { notFound, conflict }