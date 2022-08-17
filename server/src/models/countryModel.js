const mongoose = require('mongoose')

const { Schema } = mongoose

const countryModel = new Schema({
  user: { type: String, required: true, minLength: 4, maxLength: 25 },
  description: { type: String, minLength: 5, maxLength: 400 },
  imageUrl: { type: String, required: true }
  // userImage: { type: String, required: true }
})

module.exports = mongoose.model('Country', countryModel)
