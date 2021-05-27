const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    regn: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
       type: String,
       required: true
    },
    fname: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    }
});

//export model
const User = mongoose.model('User', UserSchema)

module.exports = User