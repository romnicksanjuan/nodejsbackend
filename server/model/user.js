const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    message:String
})

module.exports = mongoose.model('users', userSchema)