const mongoose = require('mongoose')

const { Schema } = mongoose

const countryModel = new Schema({
  user: { type: String, required: true, minLength: 4, maxLength: 25, unique: true },
  country: { type: String, required: true, unique: true },
  continent: { type: String, required: true },
  hemisphere: { type: String, required: true },
  language: { type: String, required: true },
  description: { type: String, minLength: 5, maxLength: 400 }
})

module.exports = mongoose.model('Country', countryModel)
