const {Schema, model}= require('../connection')
const userSchema = new  Schema({
    name: String,
    email: String,
    password: String,
    cpass: String,
    role:{type:String, default:"user"}

});
module.exports = model('user', userSchema)