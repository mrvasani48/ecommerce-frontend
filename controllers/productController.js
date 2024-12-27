import Product from "../models/ProductModel.js";
import Wishlist from "../models/wishlist.js";
import jsonwebtoken from "jsonwebtoken";
const ProductController = {
  //add product
  addProducts: async (req, res) => {
    try {
      const { id, title, price, description, category, image, rating } =
        req.body;
       
       //check product is exist 
      const prodoct = await Product.findOne({id:id})
      if(!prodoct){
      //product store in db
      const data = await Product.create({
        id,
        title,
        price,
        description,
        category,
        image,
        rating,
      });
      //product add successfully
      res.json({ message: "successfully product add", data: data, status: 200 });
    }
    else{
      //responce product is already exist 
      res.status(404).json({ message: "product id already used" });
    }

    } catch (error) {
      res.status(404).json({ message: error.message});
    }
  },
  //get product
  getProduct: async (req, res) => {
    try {
      //get all product
      const prodocts = await Product.find({deleted_at:null});
      res.json(prodocts);
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //get perticular products
  getPerticularProduct: async (req, res) => {
    try {
      const id=req.params.id
      const prodoct = await Product.findOne({id:id});
      //console.log(Product);
      if(prodoct){
      res.json(prodoct);
      }
      else{
        res.status(404).json({ message: "Product not found", status: 404 });
      }
    } catch (error) {
      res.status(404).json({ message: error.message, status: 404 });
    }
  },
  //update product 
  updateProduct:async(req,res)=>{
    try{
        const {id} =req.params
        const update=req.body
        // console.log(update)
        const isExist=await Product.exists({id:id})
        if(isExist){
           const updatedProduct= await Product.findOneAndUpdate({_id:isExist._id},update,{new:true})
          res.json({message:"successfully product update",data:updatedProduct,status:200})
        }
        else{
          res.status(404).json({message:" product not found",status:204})
        }
       
    }
    catch(error){
      res.status(404).json({message:error.message,status:404})
    } 
  },
  //delete Product
  deleteProduct:async(req,res)=>{
     try{
      const {id} = req.params
       const deletedProduct=await Product.findOneAndUpdate({id:id},{deleted_at:new Date().toDateString()})  
      //  console.log(deletedProduct);   
       res.json({message:"successfully product deleted",status:200})
     }
     catch(error){
      res.status(404).json({message:error.message})
     }
  },
  //add to wishlist
  addWishlist:async(req,res)=>{
    try {
      const { id}=req.body
      const token=req.headers.token
      const decoded =jsonwebtoken.verify(token,"45645454");
      const user_id=decoded.user_id;
      const product_id= await Product.exists({id})
      const isExist =await Wishlist.findOne({product_id:product_id,user_id:user_id})
        // console.log("isexist",isExist);
      //cehck product is already exist or not
      if(!isExist){
        const wishlist=await Wishlist.create({
         product_id,user_id
        })
        //responce product succesfully added to wishlist
        res.status(200).json({message:"successfully added to wishlist",data:wishlist,status:200})
      }
      else{
       //responce product already in wishlist
        res.status(404).json({message:"product already in wishlist"})
      }
    } catch (error) {
      res.status(404).json({message:error.message})
    }
  },
  //get all wishlist product 
  getallWishlist:async(req,res)=>{
    try {
      const wishlistProduct =await Wishlist.find().populate([{ path: 'product_id', select: ["title","price","category","image","id"] },
      { path: 'user_id', select: ['name', "email","number","city"] }])
      // console.log(wishlistProduct);
        //responce product succesfully added to wishlist
        res.status(200).json({message:"successfully added to wishlist",data:wishlistProduct,status:200})
    } catch (error) {
      //console.log("error")
      res.status(404).json({message:error.message})
    }
  },
   //single user wishlist product 
   singleUserWishlist:async(req,res)=>{
    try {
      //console.log(req.headers)
      const token=req.headers.token
      const decoded = jsonwebtoken.verify(token,"45645454");
     //console.log(decoded)
      const wishlistProduct =await Wishlist.find({user_id:decoded.user_id}).populate([{ path: 'product_id', select: ["title","price","category","image","id"] },
      { path: 'user_id', select: ['name', "email","number","city"] }])
       // responce product succesfully added to wishlist

        res.status(200).json({message:"successfully fetch",data:wishlistProduct,status:200})
    } catch (error) {
       //console.log("error")
      res.status(404).json({message:error.message})
    }
  },
  //remove from wishlist
  removeWishlist:async(req,res)=>{
   try {
    const _id= req.params._id
    //remove product to wishlist
    const removeFromWIshlist=await Wishlist.deleteOne({_id})
    res.status(200).json({message:"successfully remove from wishlist ",data:removeFromWIshlist,status:200})
   } catch (error) {
      res.status(404).json({message:error.message,status:404})
   }
  }
};
export default ProductController;
