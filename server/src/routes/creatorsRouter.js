const express = require('express')
const userController = require('../controllers/creatorsController')
const validator = require('express-joi-validation').createValidator({})
const { creatorBodySchema, creatorParamsSchema, creatorQuerySchema } = require('../validations/creatorValidator')

const router = (Creators) => {
  const creatorRouter = express.Router()

  const { getAllCreators, postCreator, putCreatorById, getCreatorById, deleteCreatorById } =
    userController(Creators)

  creatorRouter
    .route('/creators')
    .get(validator.query(creatorQuerySchema), getAllCreators, postCreator)
    .post(validator.body(creatorBodySchema), postCreator)

  creatorRouter
    .route('/creators/:id')
    .get(getCreatorById, deleteCreatorById)
    .put(validator.body(creatorBodySchema), putCreatorById)
    .delete(validator.params(creatorParamsSchema), deleteCreatorById)

  return creatorRouter
}

module.exports = router
