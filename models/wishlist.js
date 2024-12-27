import mongoose from "mongoose";

const Schema=mongoose.Schema
const wishlistSchema=Schema({
    product_id:{
        type: Schema.Types.ObjectId,
        ref:'Product'
    },
    user_id:{
        type: Schema.Types.ObjectId,
        ref:'User'
    },
    created_at:{
        type:Date,
        default:new Date()
    }
})

const Wishlist =mongoose.model("Wishlist",wishlistSchema)
export default Wishlist