const express = require ('express')

const {UsersController}=  require('./controler')

const router = express.Router()

module.exports.UserAPI = (app)=> {

    router
    .get ('/', UsersController.getUsers) // http://localhost:3000/api/products/
    .get ('/:id',UsersController.getUser) // http://localhost:3000/api/products/2
    .post ('/',UsersController.createUser)
    .put ('/:id',UsersController.updateUser)
    .delete ('/:id', UsersController.deleteUser)
    app.use('/api/users',router)
}

