import express from 'express'
import { updateUser, deleteUser, test } from '../Model/Controllers/userController.js'
import { verifyToken } from '../utils/verifyUser.js'; 
export const userRoute=express.Router()

userRoute.get('/', test)
userRoute.post('/update/:id', verifyToken, updateUser);
userRoute.delete('/delete/:id', verifyToken, deleteUser);