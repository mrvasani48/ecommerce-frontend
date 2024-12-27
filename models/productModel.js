import mongoose from "mongoose";
import "mongoose-type-url"
const Schema = mongoose.Schema;

const productSchema = new Schema({
  id: {
    type: Number,
    required:true
  },
  title: {
    type: String,
    required:true
  },
  price: {
    type: Number,
    required:true
  },
  description: {
    type: String,
    required:true
  },
  category: {
    type: String,
    required:true
  },
  image: {
    type: mongoose.SchemaTypes.Url,
    required:true
  },
  rating: 
    {
      rate: {
        type: Number,
        required:true
      },
      count: {
        type: Number,
        required:true
      },
    },
   deleted_at:{
     type:String,
     default:null
   } 
});

const Product = mongoose.model("Product", productSchema);
export default Product;
