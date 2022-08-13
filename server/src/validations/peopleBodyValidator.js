const Joi = require('joi')

const paramsSchema =
  Joi.object({
    id: Joi.string().min(24).max(24).required()
  })

const querySchema = Joi.alternatives().try(
  Joi.object({
    username: Joi.string().required()
  }),
  Joi.object({})
)

const countryQuerySchema = Joi.alternatives().try(
  Joi.object({
    country: Joi.string().required()
  }),
  Joi.object({})
)

const bodySchema = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(30).trim().required(),
  // lastName: Joi.string().alphanum().min(3).max(30).trim().required(),
  username: Joi.string().min(6).max(16).required(),
  password: Joi.string().required(),
  email: Joi.string().email().required()
  // address: Joi.string().required(),
  // phone: Joi.string().min(9).max(13).required()
})

const countryBodySchema = Joi.object({
  user: Joi.string().required(),
  country: Joi.string().required(),
  continent: Joi.string().required(),
  hemisphere: Joi.string().required(),
  language: Joi.string().required(),
  description: Joi.string().required(),
  imageUrl: Joi.string().required()
})

const userParamsSchema =
  Joi.object({
    id: Joi.string().min(24).max(24).required()
  })

const userQuerySchema = Joi.alternatives().try(
  Joi.object({
    user: Joi.string().required()
  }),
  Joi.object({})
)

const userBodySchema = Joi.object({
  username: Joi.string().min(6).max(16).required(),
  profilePhoto: Joi.string(),
  email: Joi.string().email().required(),
  password: Joi.string().required()
})

module.exports = { paramsSchema, bodySchema, querySchema, countryBodySchema, countryQuerySchema, userParamsSchema, userQuerySchema, userBodySchema }
