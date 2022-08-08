const express = require('express')
const userController = require('../controllers/userController')
const validator = require('express-joi-validation').createValidator({})
const { userParamsSchema, userQuerySchema, userBodySchema } = require('../validations/peopleBodyValidator')
// falta cambiar country del crud

const router = (User) => {
  const userRouter = express.Router()

  const { getAllCountries, getCountryById, postCountry, putCountryById, deleteCountryById } =
    userController(User)

  userRouter
    .route('/user')
    .get(validator.query(userQuerySchema), getAllCountries)
    .post(validator.body(userBodySchema), postCountry)

  userRouter
    .route('/user/:id')
    .get(getCountryById)
    .put(validator.body(userBodySchema), putCountryById)
    .delete(validator.params(userParamsSchema), deleteCountryById)

  return userRouter
}

module.exports = router
