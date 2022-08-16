const mongoose = require('mongoose')

const { Schema } = mongoose

const peopleModel = new Schema({
  firstname: { type: String, required: true, minLength: 3, maxLength: 30 },
  // lastName: { type: String, required: true, minLength: 3, maxLength: 30 },
  username: { type: String, minLength: 3, maxLength: 30, unique: true },
  description: { type: String },
  profilePhoto: { type: String },
  email: { type: String, unique: true },
  password: { type: String }
  // address: { type: String, required: true },
  // phone: { type: Number, required: true, unique: true }
})

module.exports = mongoose.model('People', peopleModel)
