const mongoose = require('mongoose')

const { Schema } = mongoose

const userModel = new Schema({
    // user, date, mail, password
  username: { type: String, required: true, minLength: 3, maxLength: 30, unique: true},
  date: ,
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
})

module.exports = mongoose.model('User', userModel)
