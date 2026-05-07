import express from 'express'
import cors from 'cors'
import errorHandler from './utils/errorHandler.js'
import authRouter from './routes/authRouter.js'
import cookieParser from 'cookie-parser'
import sequelize from './database/database.js'
import { PORT, CORS_ORIGIN } from './config/config.js'

const app = express()

// middlewares
app.use(express.json())
app.use(cookieParser())
app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
)

// sync database
sequelize.sync({ force: false })

// routes 
app.use('/api/auth', authRouter)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
