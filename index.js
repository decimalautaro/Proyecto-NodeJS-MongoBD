const express = require('express');
const debug  = require('debug')('app: main');
const morgan = require ('morgan')




const { Config } = require ('./src/config/index')
const { ProdutsAPI } = require ('./src/products/')
const { UserAPI } = require ('./src/users')
const { SaleAPI } = require ('./src/sales')
const app = express()




app.use (express.json())
app.use (express.urlencoded({extended: true}))  // este middleware sirve para enviar datos atravez de formularios, archivos txt, imagenes, etc
app.use (express.static('./src/public'))


// uso de middleware de tercero
app.use (morgan('tiny')) 
console.log('Morgan habilitado');


//modulos

ProdutsAPI(app)
UserAPI(app)
SaleAPI(app)




app.listen(Config.port, ()=>{
    debug(`Servidor escuchando en el puerto ${Config.port}`)
})