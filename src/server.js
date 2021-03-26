const express = require("express"); // pegando o express
const server = express(); // rodando a funcao de cima
const routes = require("./routes")

// habilitar arquivos estaticos (criando rotas)
server.use(express.static("public")) // pegando a pasta public com todo o css e as imagens pra mostrar tudo na index

//routes
server.use(routes)
server.listen(3000, () => console.log('ta rodando essa bagaca'))

