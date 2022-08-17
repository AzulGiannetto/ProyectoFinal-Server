const Joi = require('joi')

const creatorParamsSchema =
  Joi.object({
    id: Joi.string().min(24).max(24).required()
  })

const creatorQuerySchema = Joi.alternatives().try(
  Joi.object({
    name: Joi.string().required()
  }),
  Joi.object({})
)

const creatorBodySchema = Joi.object({
  name: Joi.string().required(),
  gitUser: Joi.string().required(),
  linkedIn: Joi.string().required(),
  photo: Joi.string()
})

module.exports = { creatorBodySchema, creatorParamsSchema, creatorQuerySchema }
