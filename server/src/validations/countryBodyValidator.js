const Joi = require('joi')

const schema = Joi.object({
  user: Joi.string().required().min(4).max(25),
  country: Joi.string().alphanum().required().trim(),
  continent: Joi.string().alphanum().required().trim(),
  hemisphere: Joi.string().alphanum().required().trim(),
  language: Joi.string().alphanum().required().trim(),
  description: Joi.string().alphanum().required().max(400).min(5)
})

module.exports = schema
