const {ObjectId} = require('mongodb')

const {Database} = require ('../database/index')

const COLLECTION = 'products'

const getAll = async ()=> { // se encarga de traer todos los datos de la bd de products
    const collection = await Database(COLLECTION)
    return await collection.find({}).toArray()
} 


const getById = async(id) => {
    const collection = await Database(COLLECTION )
    return await collection.findOne({_id:ObjectId(id)})
}

const create = async (product)=>{
    const collection = await Database(COLLECTION )
    let result = await collection.insertOne(product)
    return result.insertedId
}

module.exports.ProductsService = {
    getAll,
    getById,
    create,
}







