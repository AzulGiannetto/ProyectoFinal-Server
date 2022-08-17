// const express = require('express')
// const userController = require('../controllers/userController')
// const validator = require('express-joi-validation').createValidator({})
// const { userParamsSchema, userQuerySchema, userBodySchema } = require('../validations/peopleBodyValidator')

// const router = (User) => {
//   const userRouter = express.Router()

//   const { getAllUser, getUserById, postUser, putUserById, deleteUserById } =
//     userController(User)

//   userRouter
//     .route('/user')
//     .get(validator.query(userQuerySchema), getAllUser)
//     .post(validator.body(userBodySchema), postUser)

//   userRouter
//     .route('/user/:id')
//     .get(getUserById)
//     .put(validator.body(userBodySchema), putUserById)
//     .delete(validator.params(userParamsSchema), deleteUserById)

//   return userRouter
// }

// module.exports = router
