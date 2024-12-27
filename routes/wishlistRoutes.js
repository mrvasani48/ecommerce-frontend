import express from "express";
import productController from '../controllers/index.js'

const routes =express.Router()

routes.post("/add-wishlist",productController.productController.addWishlist)
routes.get("/",productController.productController.getallWishlist)
routes.get("/user-wishlist",productController.productController.singleUserWishlist)
routes.delete("/remove-from-wishlist/:_id",productController.productController.removeWishlist)
export default routes;