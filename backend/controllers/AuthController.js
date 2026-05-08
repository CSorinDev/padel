import AppError from '../utils/AppError.js'
import asyncHandler from '../utils/asyncHandler.js'
import AuthService from '../services/AuthService.js'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config.js'

class AuthController {
  _sendTokenResponse = (user, statusCode, res) => {
    const csrfToken = crypto.randomBytes(32).toString('hex')

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      csrfToken,
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' })

    const cookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 1000 * 60 * 60 * 24 * 7,
    }

    res.cookie('access_token', token, cookieOptions)

    res.cookie('csrf_token', csrfToken, {
      ...cookieOptions,
      httpOnly: false,
    })

    res.status(statusCode).json({
      status: 'success',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    })
  }

  register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    if (!name || !email || !password)
      throw new AppError('Todos los campos son obligatorios', 400)

    await AuthService.add(name, email, password)

    this.login(req, res)
  })

  login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password)
      throw new AppError('Todos los campos son obligatorios', 400)

    const user = await AuthService.login(email, password)

    this._sendTokenResponse(user, 200, res)
  })
}

export default new AuthController()
