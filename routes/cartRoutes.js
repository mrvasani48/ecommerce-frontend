import express from "express";
import cartControllers from '../controllers/index.js'
const routes= express.Router()

routes.post('/add-to-cart',cartControllers.cartControllers.addToCart)
routes.delete('/remove-to-cart',cartControllers.cartControllers.removeToCart)
routes.patch('/adjust-quantity',cartControllers.cartControllers.adjustQuantity)
routes.get('/get-product-cart',cartControllers.cartControllers.getProduct)
routes.delete('/empty-cart',cartControllers.cartControllers.emptyCart)

export default routes