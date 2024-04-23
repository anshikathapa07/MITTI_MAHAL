
const {Schema, model}= require('../connection')
const productSchema = new  Schema({
    name: String,
    category: String,
    description: String,
    price : Number
    
});
module.exports = model('product', productSchema)