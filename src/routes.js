const express = require('express')
const routes = express.Router()
const pages = __dirname + "/pages/"

const profile = {
    name : "Leonardo Vieira",
    avatar: "https://avatars.githubusercontent.com/u/61148177?v=4",
    "monthly-budget" : 2500,
    "days-per-week": 5,
    "hours-per-day": 8,
    "vacation-per-year" : 4

}


// req e res
routes.get('/', (req, res) =>   res.render(pages + "index")) // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o serve)
routes.get('/job', (req, res) =>   res.render(pages + "job")) // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o serve)
routes.get('/job/edit', (req, res) =>   res.render(pages + "job-edit")) // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o serve)
routes.get('/profile', (req, res) =>   res.render(pages + "profile", {profile})) // dirname = a propria pasta. esse cara ta pegando a pagina src para mostrar quando rodar o serve)


module.exports = routes;

