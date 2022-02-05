const createError = require('http-errors')

const debug = require('debug')('app:module-products-controller')

const {SalesService} = require ('./services')

const {Response} = require ('../common/response')




module.exports.SalesController ={


    getSales : async (req,res)=> {
        try {
            let sales = await SalesService.getAll()
            Response.succes(res,200, 'Lista de ventas', sales)

        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },


    getSale : async(req,res)=> {
        try {
            const {params: {id}} = req
            let sale = await SalesService.getById(id)
            if (!product) {
                Response.error(res, new createError.NotFound())
            }
            else{
                Response.succes(res,200, `Venta ${id}`, sale)
            }

        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
    

    createSale : async(req,res)=> {
        try {
            const {body} = req
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest())
            }
            else{
                const insertedId = await SalesService.create(body)

                Response.succes(res,201, 'Venta agregada', insertedId)
            }

            
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },


    updateSale: async (req, res) => {
        try {
            const {params: {id}} = req
            const {body} =req 
            const update = await SalesService.update(id, body)
            if (!update) {
                Response.error(res, new createError.NotFound());
                } else {
                Response.succes(res, 200, `Venta ${id} modificado`, Object(body));
                }


        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },

    deleteSale : async(req,res)=> {
        try {
            const {params: {id}} = req
            const {body} =req 
            const eliminar = await SalesService.eliminar(id)
            if (eliminar.deleteCount === 1) {
                Response.error(res, new createError.NotFound());
                
                } else {
                    Response.succes(res, 200, `Venta con ID: ${id} eliminado`, Object(body));
                }


        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },


}
