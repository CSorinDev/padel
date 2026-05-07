import User from '../models/User.js'
import AppError from '../utils/AppError.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/config.js'

class AuthService {
  async hashPassword(password) {
    const hashedPassword = await bcrypt.hash(password, 10)
    return hashedPassword
  }

  async add(name, email, password) {
    const existingUser = await User.findOne({ where: { email } })
    if (existingUser) throw new AppError('El email ya está registrado', 409)

    const user = await User.create({
      name,
      email,
      password: await this.hashPassword(password),
    })

    return user
  }

  async login(email, password) {
    const user = await User.findOne({ where: { email } })
    if (!user) throw new AppError('Credenciales incorrectas', 401)

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) throw new AppError('Credenciales incorrectas', 401)

    return user
  }
}

export default new AuthService()
