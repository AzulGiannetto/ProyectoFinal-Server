const httpStatus = require('../helpers/httpStatus')

const creatorsController = (Creators) => {
  const getAllCreators = async (req, res, next) => {
    try {
      const { query } = req

      const response = await Creators.find(query)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const postCreator = async (req, res, next) => {
    try {
      const { body } = req

      const creators = await new Creators(body)

      await creators.save()

      res.status(httpStatus.CREATED).json(creators)
    } catch (err) {
      next(err)
    }
  }

  const putCreatorById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await Creators.find({
        _id: params.id
      })

      if (checkData === null) {
        res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
      }

      await Creators.updateOne(
        {
          _id: params.id
        },
        {
          $set: {
            name: body.name,
            gitUser: body.gitUser,
            linkedIn: body.linkedIn,
            photo: body.photo
          }
        }
      )

      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }

  const getCreatorById = async (req, res, next) => {
    try {
      const { params } = req

      const response = await Creators.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deleteCreatorById = async (req, res, next) => {
    try {
      const { params } = req

      await Creators.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).send('Data successful deleted')
    } catch (err) {
      next(err)
    }
  }

  return {
    getAllCreators, postCreator, putCreatorById, getCreatorById, deleteCreatorById
  }
}

module.exports = creatorsController
