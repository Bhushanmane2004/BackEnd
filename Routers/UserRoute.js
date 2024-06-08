import express from 'express'
import { loginuser,register } from '../Controllers/usercontrol.js'

const userroute = express.Router()

userroute.post('/register',register);
userroute.post('/login',loginuser);

export default userroute;