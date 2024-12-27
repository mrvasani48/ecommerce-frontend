import express from "express";
const Route = express.Router()
import reqresController from '../controllers/index.js'
Route.get('/users',reqresController.reqresController.getUsers)
Route.post('/add-users',reqresController.reqresController.addUsers)
export default Route