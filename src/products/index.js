const express = require ('express')

const {ProductsController}=  require('./controler')

const router = express.Router()

module.exports.ProdutsAPI = (app)=> {

    router
    .get ('/', ProductsController.getProducts) // http://localhost:3000/api/products/
    .get ('/:id',ProductsController.getProduct) // http://localhost:3000/api/products/2
    .post ('/',ProductsController.createProduct)


    app.use('/api/products',router)
}

