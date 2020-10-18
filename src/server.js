//importar dependencia
const express = require('express');
const path = require('path');
const page = require('./pages.js')
//iniciando o express
const server = express()
server
    //utilizando arquivos estáticos
    .use(express.static('public'))
    
    //configurar templete engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine','hbs')
    
    //criar uma rota
    .get('/', page.index)
    .get('/orphanages', page.orphanages)
    .get('/orphanage', page.orphanage)
    .get('/create-orphanage', page.createOrphanage)
//ligar o servidor
server.listen(5500)