const express = require('express')
const authController = require('../controllers/authController')
const validator = require('express-joi-validation').createValidator({})
const { authParamsSchema, authQuerySchema, authBodySchema } = require('../validations/peopleBodyValidator')

const router = (People) => {
  const authRouter = express.Router()

  const { getAllPeople, logIn, register, getPeopleById, deletePeopleById, putPeopleById } = authController(People)

  authRouter.route('/auth/login').post(logIn)

  authRouter.route('/auth/register').post(validator.body(authBodySchema), register)

  authRouter
    .route('/auth')
    .get(validator.query(authQuerySchema), getAllPeople)

  authRouter
    .route('/auth/:id')
    .get(getPeopleById)
    .put(validator.body(authBodySchema), putPeopleById)
    .delete(validator.params(authParamsSchema), deletePeopleById)

  return authRouter
}

module.exports = router
