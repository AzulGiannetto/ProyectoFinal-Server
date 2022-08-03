const express = require('express')
const People = require('./models/peopleModel')
const Country = require('./models/countryModel')
const peopleRouter = require('./routes/peopleRouter')(People)
const countryRouter = require('./routes/countryRouter')(Country)
const authRouter = require('./routes/authRouter')(People)
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
const httpStatus = require('./helpers/httpStatus')
const { expressjwt } = require('express-jwt')
const PORT = process.env.PORT || 5000

const app = express()

require('./database/db')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.all(
  '/*',
  expressjwt({ secret: process.env.SECRET, algorithms: ['HS256'] }).unless({
    path: ['/auth/login', '/auth/register']
  })
)

app.use((err, _, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(httpStatus.UNAUTHORIZED).json({
      error: err.name,
      cause: 'Unauthorized. Missing or invalid token provided.'
    })
  } else {
    next(err)
  }
})

app.use('/api', peopleRouter, countryRouter)
app.use('/', authRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log('Server is running')
})
