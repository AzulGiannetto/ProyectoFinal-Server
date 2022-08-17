const express = require('express')
const People = require('./models/peopleModel')
const Country = require('./models/countryModel')
// const User = require('./models/userModel')
const Creators = require('./models/creatorsModel')
const countryRouter = require('./routes/countryRouter')(Country)
// const userRouter = require('./routes/userRouter')(User)
const creatorsRouter = require('./routes/creatorsRouter')(Creators)
const authRouter = require('./routes/authRouter')(People)
const errorHandler = require('./middleware/errorHandler')
require('dotenv').config()
const httpStatus = require('./helpers/httpStatus')
const { expressjwt } = require('express-jwt')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const app = express()

require('./database/db')

app.use(cors())
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
      cause: 'Unauthorized. The token is invalid.'
    })
  } else {
    next(err)
  }
})

app.use('/api', countryRouter, creatorsRouter)
app.use('/', authRouter)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log('The server is running')
})
