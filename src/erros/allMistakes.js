
// esse arquivo serve para colocar os erros quando der algum

export function notFoundError(item){
    return{
        type:"notFound",
        message: `${item} não foi encontrado`
    }
}