import mongoose from "mongoose";
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  product: [
    {
      product_id: {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
      qty: {
        type: Number,
        required: true,
      },
      title:{
        type: String,
        required: true,
      } ,
      price:{
        type: String,
        required: true,
      }
    },
  ],
  shippingCarge: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  userDetails: {
    address: {
      type: String,
      required: true,
    },
    companyname: {
      type: String,
  
    },
    country: { type: String, required: true },

    email: {
      type: String,
      required: true,
    },
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    ordernotes: {
      type: String,
    },
    phone: {
      type: Number,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    zipcode: {
      type: Number,
      required: true,
    },
  },
  user_id:{
    type:Schema.Types.ObjectId,
    required:true,
    ref:"User"
  },
  order_at:{
    type:Date,
    default:new Date().toDateString()
  },
  PaymentOption:{
    type:String,
    required:true
  },
  cancel_at:{
    type:Date,
    default:null
  }
});
const Order = mongoose.model("order", orderSchema);
export default Order