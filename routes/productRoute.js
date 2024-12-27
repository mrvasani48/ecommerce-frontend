import express from 'express'
const routes = express.Router()
import productController from '../controllers/index.js'

routes.get("/",productController.productController.getProduct)
routes.get("/:id",productController.productController.getPerticularProduct)

routes.post("/add-product",productController.productController.addProducts)
routes.patch("/update-product/:id",productController.productController.updateProduct)
routes.patch("/delete-product/:id",productController.productController.deleteProduct)

export default routes