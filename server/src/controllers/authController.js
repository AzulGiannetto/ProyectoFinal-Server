const bcrypt = require('bcrypt')
const generateToken = require('../helpers/generateToken')
const httpStatus = require('../helpers/httpStatus')

const authController = (People) => {
  const logIn = async (req, res, next) => {
    try {
      const { body } = req
      const email = await People.findOne({
        email: body.email
      })

      if (
        email === null ||
    !(await bcrypt.compare(body.password, email.password))
      ) {
        return res.status(httpStatus.UNAUTHORIZED).send('The credentials are invalid')
      }

      const token = generateToken()

      return res.status(httpStatus.OK).json({
        status: 'OK',
        token
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

  return { logIn, register }
}

module.exports = authController
