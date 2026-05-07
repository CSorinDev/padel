import { Router } from 'express'
import AuthController from '../controllers/AuthController.js'
import { authMiddleware } from '../middlewares/authMiddleware.js'

const authRouter = Router()

authRouter.post('/register', AuthController.register)
authRouter.post('/login', AuthController.login)
authRouter.post('/me', authMiddleware, (req, res) => {
  const { user } = req
  res.status(200).json({
    user: {
      name: user.name,
      email: user.email,
      role: user.role,
    },
  })
})

export default authRouter
