import { JWT_SECRET } from '../config/config.js'
import AppError from '../utils/AppError.js'
import asyncHandler from '../utils/asyncHandler.js'
import jwt from 'jsonwebtoken'

export const authMiddleware = asyncHandler(async (req, _res, next) => {
  const token = req.cookies.access_token
  if (!token) throw new AppError('Sesión expirada o no iniciada', 401)

  try {
    const decoded = jwt.verify(token, JWT_SECRET)
    const csrfHeader = req.headers['x-csrf-token']
    if (!csrfHeader || csrfHeader !== decoded.csrfToken)
      throw new AppError('CSRF token inválido', 403)

    req.user = decoded
    next()
  } catch (error) {
    throw new AppError('Token inválido o expirado', 401)
  }
})
