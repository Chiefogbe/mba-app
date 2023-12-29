import express from 'express'
import { signin, signup, google, signout } from '../Model/Controllers/authControllers.js'


export const authRoute=express.Router()

authRoute.post('/signup', signup)
authRoute.post('/signin', signin)
authRoute.post('/google', google)
authRoute.get('/signout', signout)