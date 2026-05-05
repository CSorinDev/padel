import express from 'express'
import cors from 'cors'
import { PORT } from './config/config.js'

const app = express()

app.use(cors())

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})