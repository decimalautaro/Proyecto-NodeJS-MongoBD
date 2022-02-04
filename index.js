const express = require('express');
const debug  = require('debug')('app: main');

const { Config } = require ('./src/config/index')
const { ProdutsAPI } = require ('./src/products/')
const { UserAPI } = require ('./src/users')
const app = express()

app.use (express.json())

//modulos

ProdutsAPI(app)
UserAPI(app)




app.listen(Config.port, ()=>{
    debug(`Servidor escuchando en el puerto ${Config.port}`)
})