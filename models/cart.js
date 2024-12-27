import mongoose from "mongoose";
import "mongoose-type-url";
const Schema = mongoose.Schema;
const CartSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  product_id: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  image: {
    type: mongoose.SchemaTypes.Url,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    default: 1,
  },
});
const Cart = mongoose.model("Cart", CartSchema);
export default Cart;
