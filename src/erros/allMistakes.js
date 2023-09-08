
// esse arquivo serve para colocar os erros quando der algum

export function notFound(item = "Item"){
    return{
        type:"notFound",
        message: `${item} não foi encontrado`
    }
}