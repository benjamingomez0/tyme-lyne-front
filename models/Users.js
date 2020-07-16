const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const userSchema = new Schema({
    display_name:{type:String,required:true,trim:true},
    password:{type:String, required:true},
    email:{type:String, required:true, unique:true},
});

const User = mongoose.model('User', userSchema);

module.exports = User;
