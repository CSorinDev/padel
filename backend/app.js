import express from 'express'
import cors from 'cors'
import errorHandler from './utils/errorHandler.js'
import authRouter from './routes/authRouter.js'
import sequelize from './database/database.js'
import { PORT, CORS_ORIGIN } from './config/config.js'

const app = express()

app.use(express.json())

app.use(
  cors({
    origin: CORS_ORIGIN,
    credentials: true,
  })
)

sequelize.sync({ force: false })

app.use('/api/auth', authRouter)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
