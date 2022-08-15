// const httpStatus = require('../helpers/httpStatus')

// const userController = (User) => {
//   const getAllUser = async (req, res, next) => {
//     try {
//       const { query } = req

//       const response = await User.find(query)

//       return res.status(httpStatus.OK).json(response)
//     } catch (err) {
//       next(err)
//     }
//   }

//   const postUser = async (req, res, next) => {
//     try {
//       const { body } = req

//       const user = await new User(body)

//       await user.save()

//       res.status(httpStatus.CREATED).json(user)
//     } catch (err) {
//       next(err)
//     }
//   }

//   const putUserById = async (req, res, next) => {
//     try {
//       const { body, params } = req

//       const checkData = await User.find({
//         _id: params.id
//       })

//       if (checkData === null) {
//         res.status(httpStatus.FORBIDDEN).send('No data found with the provided ID.')
//       }

//       await User.updateOne(
//         {
//           _id: params.id
//         },
//         {
//           $set: {
//             username: body.username,
//             description: body.description,
//             profilePhoto: body.profilePhoto,
//             email: body.email,
//             password: body.password
//           }
//         }
//       )

//       return res.status(httpStatus.CREATED).send('Data successful updated')
//     } catch (err) {
//       next(err)
//     }
//   }

//   const getUserById = async (req, res, next) => {
//     try {
//       const { params } = req

//       const response = await User.findById(params.id)

//       return res.status(httpStatus.OK).json(response)
//     } catch (err) {
//       next(err)
//     }
//   }

//   const deleteUserById = async (req, res, next) => {
//     try {
//       const { params } = req

//       await User.findByIdAndDelete(params.id)

//       return res.status(httpStatus.OK).send('Data successful deleted')
//     } catch (err) {
//       next(err)
//     }
//   }

//   return {
//     getAllUser,
//     getUserById,
//     postUser,
//     putUserById,
//     deleteUserById
//   }
// }

// module.exports = userController
