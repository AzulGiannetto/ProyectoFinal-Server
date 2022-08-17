const Joi = require('joi')

const countryQuerySchema = Joi.alternatives().try(
  Joi.object({
    user: Joi.string().required()
    // country: Joi.string().required()
  }),
  Joi.object({})
)

const countryBodySchema = Joi.object({
  user: Joi.string().required(),
  description: Joi.string().required(),
  imageUrl: Joi.string().required()
})

const paramsSchema = Joi.object({
  id: Joi.string().min(24).max(24).required()
})

// const schema = Joi.object({
//   user: Joi.string().required().min(4).max(25),
//   // country: Joi.string().alphanum().required().trim(),
//   // continent: Joi.string().alphanum().required().trim(),
//   // hemisphere: Joi.string().alphanum().required().trim(),
//   // language: Joi.string().alphanum().required().trim(),
//   description: Joi.string().alphanum().required().max(400).min(5),
//   imageUrl: Joi.string().alphanum().required()
// })

module.exports = { countryBodySchema, countryQuerySchema, paramsSchema }
