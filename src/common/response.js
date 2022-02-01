const createError = require('http-errors') //gestiona errores

module.exports.Response = {
    succes:  (res,status= 200 ,message= 'Ok',body= { }) =>{
        res.status(status).json({message, body})

    },
    error: (res, error = null)=> {
        const {statusCode, message} = error ? error : new createError.InternalServerError()
        res.status(statusCode).json({message})
        
    }
}