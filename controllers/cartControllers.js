import jsonwebtoken from "jsonwebtoken";
import Cart from "../models/cart.js";

const cartControllers = {
  //add to cart  
  addToCart: async (req, res) => {
    try {
      const token = req.headers.token;
      const decoded = jsonwebtoken.verify(token, "45645454");
      // console.log( req.body);
      const { title, id, product_id, image, price } = req.body;
     //cehck product available in cart
      const isExist = await Cart.findOne({ user_id: decoded.user_id, id: id });
      if (isExist) {
          //update quantity in product
        const cartProduct = await Cart.findOneAndUpdate(
          { user_id: decoded.user_id },
          { qty: isExist.qty + 1 },
          {new:true}
        );
        //responce product added in cart
        res
          .json({ message: `${cartProduct.title} added in cart`, data: cartProduct, status: 200 })
          .status(200);
      } else {
        //product add in cart db
        const cartProduct = await Cart.create({
          user_id: decoded.user_id,
          title,
          id,
          product_id,
          image,
          price,
        });
        //responce product added in cart successfully
        res
          .json({ message: `${title} product added in cart successfully`, data: cartProduct, status: 200 })
          .status(200);
      }
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //remove to cart
  removeToCart: async (req, res) => {
    try {
      const token = req.headers.token;
      const decoded = jsonwebtoken.verify(token, "45645454");
     //cehck product available in cart
      const removetocart = await Cart.findOneAndRemove({ user_id: decoded.user_id, id:req.headers.id });
        res
          .json({ message: `product remove in cart successfully`, data: removetocart, status: 200 })
          .status(200);
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //adjust Quantity 
  adjustQuantity: async (req, res) => {
    try {
      const token = req.headers.token;
      const decoded = jsonwebtoken.verify(token, "45645454");
      const { id,qty } = req.body;
     //check product available in cart
      const isExist = await Cart.findOne({ user_id: decoded.user_id, id: id });
      if(isExist){
        //update quantity of product
        const updateQantityproduct = await Cart.findOneAndUpdate({ user_id: decoded.user_id, id: id },{qty:qty},{new:true});
        res.status(200).json({ message: ` update quantity of product  successfully`,data:updateQantityproduct, status: 404 })
      }else{
     //responce  product not available in cart
        res.status(404).json({ message: ` product not in cart `, status: 404 })
      }
     ;
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  getProduct:async(req,res)=>{
  try {
    const token = req.headers.token;
    const decoded = jsonwebtoken.verify(token, "45645454");
    if(!token){
       //responce  token is required
       res.status(404).json({ message: `token is required `, status: 404 })
    }
    // console.log( decoded.user_id)
   //check product available in cart
    const isExist = await Cart.findOne({ user_id: decoded.user_id});
    if(isExist){
    //update quantity of product
      const allProduct = await Cart.find({ user_id: decoded.user_id});
      res.status(200).json({ message: `successfully fetch all product in cart `,data:allProduct, status: 200 })
    }else{
   //responce  product not available in cart
      res.status(204).json({ message: ` product not in cart `,data:[], status: 404 })
    }
   ;
  } catch (error) {
    res.status(404).json({ message: error.message, status: 404 });
  }
  }, 
  //empty cart
  emptyCart: async (req, res) => {
   try {
     const token = req.headers.token;
     const decoded = jsonwebtoken.verify(token, "45645454");
    //check product available in cart
     const removetocart = await Cart.deleteMany({ user_id: decoded.user_id});
       res
         .json({ message: `all product remove in cart successfully`,data:removetocart, status: 200 })
         .status(200);
   } catch (error) {
     res.status(404).json({ message: error.message, status: 404 });
   }
  },
};
export default cartControllers;
