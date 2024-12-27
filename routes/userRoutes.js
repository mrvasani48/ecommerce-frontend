import express  from "express";
const Router =express.Router()
import userControllers from '../controllers/index.js'
Router.post('/signup',userControllers.userControllers.signUp)
Router.get('/',userControllers.userControllers.getUser)
Router.post('/login',userControllers.userControllers.loginUser)
export default Router