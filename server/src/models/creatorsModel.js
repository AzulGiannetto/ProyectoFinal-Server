const mongoose = require('mongoose')

const { Schema } = mongoose

const creatorsModel = new Schema({
  name: { type: String, required: true },
  gitUser: { type: String, required: true, unique: true },
  linkedIn: { type: String, required: true, unique: true },
  photo: { type: String }
})

module.exports = mongoose.model('Creators', creatorsModel)
