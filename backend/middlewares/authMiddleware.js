import AppError from '../utils/AppError.js'
import asyncHandler from '../utils/asyncHandler.js'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config.js'

export const authMiddleware = asyncHandler(async (req, res, next) => {
  const token = req.cookies.access_token
  if (!token) throw new AppError('No autorizado', 401)

  const decoded = jwt.verify(token, JWT_SECRET)

  const csrfHeader = req.headers['x-csrf-token']

  if (!csrfHeader || csrfHeader !== decoded.csrfToken) {
    throw new AppError('Token CSRF inválido', 401)
  }

  req.user = decoded
  next()
})
