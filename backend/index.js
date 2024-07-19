import express from 'express'
import dotenv from 'dotenv'
import { dbConnect } from './utils/dbConnect.js'
import authRoutes from './routes/authRoutes.js'
import cors from 'cors'
dotenv.config()


const app = express()
app.use(cors())
dbConnect()

app.use(express.json())
app.use('/api',authRoutes)
app.listen(process.env.PORT,()=>{
    console.log("Server is running on port")
})