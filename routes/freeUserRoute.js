import express from "express";
const Route = express.Router()
import freeUserController from '../controllers/index.js'
Route.get('/user',freeUserController.freeUserController.getUsers)
Route.post('/add-user',freeUserController.freeUserController.addUsers)
export default Route