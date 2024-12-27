import express from 'express'
const Routes=express.Router()
import orderControllers from '../controllers/index.js'
Routes.post("/add-order",orderControllers.orderControllers.addOrder)
Routes.get("/get-order",orderControllers.orderControllers.getOrder)
Routes.get("/all-order",orderControllers.orderControllers.getallOrder)
Routes.patch("/cancel-order",orderControllers.orderControllers.cancelOrder)
Routes.get("/order-invoice/:id",orderControllers.orderControllers.orderInvoice)
export default Routes