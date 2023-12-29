import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import { userRoute } from './Routes/userRoutes.js'
import { authRoute } from './Routes/authRoutes.js'
import path from 'path'
dotenv.config()

const PORT=process.env.PORT||8000

mongoose.connect(process.env.MONGO)
  .then(()=>{
    app.listen(PORT, ()=>{
      console.log( `App is connected to DB && running on port ${PORT}`)
    })
  })
  .catch((error)=>{
    console.log(error)
  })

  
const __dirname = path.resolve();
const app=express()
app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});
app.use(express.json())
app.use(cookieParser())
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});

