const bcrypt = require('bcrypt')
const generateToken = require('../helpers/generateToken')
const httpStatus = require('../helpers/httpStatus')

const authController = (People) => {
  const getAllPeople = async (req, res, next) => {
    try {
      const { query } = req

      const response = await People.find(query)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const logIn = async (req, res, next) => {
    try {
      const { body } = req
      const username = await People.findOne({
        username: body.username
      })

      if (
        username === null ||
        !(await bcrypt.compare(body.password, username.password))
      ) {
        return res.status(httpStatus.UNAUTHORIZED).send('The credentials are invalid')
      }

      const token = generateToken()

      return res.status(httpStatus.OK).json({
        status: 'OK',
        token,
        id: username._id
      })
    } catch (err) {
      next(err)
    }
  }

  const register = async (req, res, next) => {
    try {
      const { body } = req

      const encryptedPassword = await bcrypt.hash(body.password, 10)

      const encryptedData = {
        ...body,
        password: encryptedPassword
      }

      const people = await new People(encryptedData)

      await people.save()

      return res.status(httpStatus.CREATED).json(people)
    } catch (err) {
      next(err)
    }
  }

  const putPeopleById = async (req, res, next) => {
    try {
      const { body, params } = req

      const checkData = await People.find({
        _id: params.id
      })

      if (checkData === null) {
        res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
      }

      await People.updateOne(
        {
          _id: params.id
        },
        {
          $set: {
            firstname: body.firstname,
            username: body.username,
            description: body.description,
            profilePhoto: body.profilePhoto,
            email: body.email,
            password: body.password
          }
        }
      )
      return res.status(httpStatus.CREATED).send('Data successful updated')
    } catch (err) {
      next(err)
    }
  }
  const getPeopleById = async (req, res, next) => {
    try {
      const { params } = req

      const response = await People.findById(params.id)

      return res.status(httpStatus.OK).json(response)
    } catch (err) {
      next(err)
    }
  }

  const deletePeopleById = async (req, res, next) => {
    try {
      const { params } = req

      await People.findByIdAndDelete(params.id)

      return res.status(httpStatus.OK).send('Data successful deleted')
    } catch (err) {
      next(err)
    }
  }

  return { getAllPeople, logIn, register, getPeopleById, deletePeopleById, putPeopleById }
}

module.exports = authController
