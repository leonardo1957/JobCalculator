const express = require('express')
const routes = express.Router()


const basePath = __dirname + "/pages"
// request e response
routes.get('/', (request, response) =>   response.sendFile(basePath + "/index.html")) // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o serve)
routes.get('/job', (request, response) =>   response.sendFile(basePath + "/job.html")) // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o serve)
routes.get('/job/edit', (request, response) =>   response.sendFile(basePath + "/job-edit.html")) // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o serve)
routes.get('/profile', (request, response) =>   response.sendFile(basePath + "/profile.html")) // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o serve)


module.exports = routes;

