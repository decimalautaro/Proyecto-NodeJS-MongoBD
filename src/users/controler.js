const createError = require('http-errors')

const debug = require('debug')('app:module-users-controller')

const {UsersService} = require ('./services')

const {Response} = require ('../common/response')




module.exports.UsersController ={


    getUsers : async (req,res)=> {
        try {
            let users = await UsersService.getAll()
            Response.succes(res,200, 'Lista de usuarios', users)

        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },


    getUser : async(req,res)=> {
        try {
            const {params: {id}} = req
            let user = await UsersService.getById(id)
            if (!user) {
                Response.error(res, new createError.NotFound())
            }
            else{
                Response.succes(res,200, `Usuario ${id}`, user)
            }

        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
    

    createUser : async(req,res)=> {
        try {
            const {body} = req
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            }
            else{
                const insertedId = await UsersService.create(body)
                Response.succes(res,201, 'Usuario agregado', insertedId)
            }

            
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },


    updateUser: async (req, res) => {
        try {
            const {params: {id}} = req
            const {body} =req 
            const update = await UsersService.update(id, body)
            if (!update) {
                Response.error(res, new createError.NotFound());
                } else {
                Response.succes(res, 200, `Usuario ${id} modificado`, Object(body));
                }


        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },

    deleteUser : async(req,res)=> {
        try {
            const {params: {id}} = req
            const {body} =req 
            const eliminar = await UsersService.eliminar(id)
            if (eliminar.deleteCount === 1) {
                Response.error(res, new createError.NotFound());
                
                } else {
                    Response.succes(res, 200, `Usuario con ID: ${id} eliminado`, Object(body));
                }


        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },


}


