const Joi = require('joi')

const authParamsSchema =
  Joi.object({
    id: Joi.string().min(24).max(24).required()
  })

const authQuerySchema = Joi.alternatives().try(
  Joi.object({
    user: Joi.string().required()
  }),
  Joi.object({})
)

const authBodySchema = Joi.object({
  firstname: Joi.string().required(),
  username: Joi.string().min(6).max(16),
  description: Joi.string(),
  profilePhoto: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string()
})

module.exports = { authParamsSchema, authQuerySchema, authBodySchema }
