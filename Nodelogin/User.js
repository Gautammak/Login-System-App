const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:Number
})

module.exports = mongoose.model('Users',UserSchema)