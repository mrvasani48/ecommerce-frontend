import express from 'express'
import productRoutes from './productRoute.js'
import reqresRoutes from './reqresRoute.js'
import freeUserRoutes from './freeUserRoute.js'
import userRoutes from './userRoutes.js'
import wishlistRoutes from './wishlistRoutes.js'
import oderRoutes from './orderRoute.js'
import cartRoutes from './cartRoutes.js'

const Route = express.Router()

Route.use('/product',productRoutes)
Route.use('/wishlist',wishlistRoutes)
Route.use('/reqres',reqresRoutes)
Route.use('/freeuser',freeUserRoutes)
Route.use('/user',userRoutes)
Route.use('/cart',cartRoutes)
Route.use('/order',oderRoutes)

export default Route