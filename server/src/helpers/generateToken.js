const jwt = require('jsonwebtoken')
// aca modificar y hacer lo de verificar token para pedirlo en ciertos crud

const generateToken = () => {
  const token = jwt.sign(
    {
      data: 'Data is here'
    },
    process.env.SECRET,
    { expiresIn: '10d' }
  )

  return token
}

module.exports = generateToken
