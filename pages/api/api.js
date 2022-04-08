export default function API(request, response) {
    if (request.method === 'GET') {
        response.status(404).json({
            message: 'Ainda não temos suporte a este método de requisição.'
        })
        return;
    } else if (request.method === 'POST') {
        response.status(404).json({
            message: 'Ainda não temos suporte a este método de requisição.'
        })
        return;
    }
    response.status(404).json({
        message: 'Ainda não temos suporte a este método de requisição.'
    })
}