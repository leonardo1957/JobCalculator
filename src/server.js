const express = require("express"); // pegando o express
const server = express(); // rodando a funcao de cima



// request e response

server.get('/', (request, response) => {
    console.log('entrei')

    return response.send('oi')
})
server.listen(3000, () => console.log('ta rodando essa bagaca'))