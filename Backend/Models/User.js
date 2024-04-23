const {Schema, model}= require('../connection')
const userSchema = new  Schema({
    name: String,
    email: String,
    password: String,
    confirm_password: String,
});
module.exports = model('user', userSchema)