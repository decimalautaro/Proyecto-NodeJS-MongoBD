const express = require ('express')

const {ProductsController}=  require('./controler')

const router = express.Router()

module.exports.ProdutsAPI = (app)=> {

    router
    .get ('/', ProductsController.getProducts) // http://localhost:3000/api/products/
    .get ('/report',ProductsController.generateReport)
    .get ('/:id',ProductsController.getProduct) // http://localhost:3000/api/products/2
    .post ('/',ProductsController.createProduct)
    .put ('/:id',ProductsController.updateProduct)
    .delete ('/:id', ProductsController.deleteProduct)
    app.use('/api/products',router)
}

