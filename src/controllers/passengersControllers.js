// essa gunção é chamada la na rota
// função que pega os dados de nome e sobrenome
export async function firstNameLastNamePost(req, res) {

    // pegando os dados enviados pelo body
    const { firstName, lastName } = req.body;

    try {
        // fazendo a requisição enviar o nome e sobrenome para o banco
        const result = await passengerNameLastName(firstName, lastName);
        // se tudo der certo
        res.sendStatus(204);

    } catch (erro) {
        res.status(500).send(erro.message);
    };
}