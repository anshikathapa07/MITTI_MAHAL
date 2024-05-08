const {Schema, model}= require('../connection')
const contactSchema = new  Schema({
    fullname: String,
    email: String,
    message : String,
});
module.exports = model('contact', contactSchema)