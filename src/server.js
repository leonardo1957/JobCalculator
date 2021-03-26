const express = require("express"); // pegando o express
const server = express(); // rodando a funcao de cima

// habilitar arquivos estaticos (criando rotas)
server.use(express.static("public")) // pegando a pasta public com todo o css e as imagens pra mostrar tudo na index

// request e response
server.get('/', (request, response) => {
    return response.sendFile(__dirname + "/pages/index.html") // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o server

})

server.listen(3000, () => console.log('ta rodando essa bagaca'))