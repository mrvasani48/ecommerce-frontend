import axios from "axios";
import { toast } from "react-toastify";
import {
  GET_CART_REQ,
  GET_CART_SUC,
  GET_CART_ERR,
  ADD_CART_REQ,
  ADD_CART_SUC,
  ADD_CART_ERR,
  REMOVE_CART_REQ,
  REMOVE_CART_SUC,
  REMOVE_CART_ERR,
  ADJUST_QUANTITY_REQ,
  ADJUST_QUANTITY_SUC,
  ADJUST_QUANTITY_ERR,
  EMPTY_CART,
} from "./cartType";
//get cart action
export const getCartProduct = () => {
  return function (dispatch) {
    // console.log("dsvz");
    dispatch({
      type: GET_CART_REQ,
    });
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        token: token,
      },
    };
    axios
      .get("http://localhost:5001/cart/get-product-cart", headers)
      .then((res) => {
        // console.log(res.data.data);
        dispatch({
          type: GET_CART_SUC,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        // console.log(error);
        dispatch({
          type: GET_CART_ERR,
          payload: error.message,
        });
      });
  };
};
//add to cart action
export const addTocart = (data) => {
  return function (dispatch) {
    dispatch({
      type: ADD_CART_REQ,
    });
    const reqData = {
      title: data.title,
      id: data.id,
      product_id: data._id,
      image: data.image,
      price: data.price,
    };
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    };
    axios.post("http://localhost:5001/cart/add-to-cart", reqData, headers)
    .then((res)=>{
      //  console.log(res.data.message)
      toast.success(res.data.message,{autoClose:2000})
       dispatch({
        type: ADD_CART_SUC,
        payload: data,
      });
    })
    .catch((error)=>{
      // console.log(error.response.data.message)
      toast.warn(error.response.data.message,{autoClose:2000})
      dispatch({
        type: ADD_CART_ERR,
        payload: error.message,
      });
    })
  };
};
//remove product from cart
export const removetocart = (id) => {
  // console.log(id)
  return function (dispatch) {
    dispatch({
      type: REMOVE_CART_REQ,
    });
    const token = localStorage.getItem("token");
    const headers = {
      headers: {
        token: token,
        id:id
      },
    };

    axios.delete("http://localhost:5001/cart/remove-to-cart",headers)
    .then((res)=>{
      //  console.log(res.data.message)
      toast.success(res.data.message,{autoClose:2000})
       dispatch({
        type: REMOVE_CART_SUC,
        payload: id,
      });
    })
    .catch((error)=>{
      // console.log(error.response.data.message)
      toast.warn(error.response.data.message,{autoClose:2000})
      dispatch({
        type: REMOVE_CART_ERR,
        payload: error.response.data.message
      });
    })
  };
};
//adjust quantity 
export const adjustQuantity = (id, qty) => {
  return function (dispatch) {
    dispatch({
      type: ADJUST_QUANTITY_REQ,
    });
   const token =localStorage.getItem("token")
   const headers={
     headers:{
           token:token,
      }
   }
   const data={
    id: id,
    qty: parseInt(qty),
  }
    axios.patch("http://localhost:5001/cart/adjust-quantity",data,headers)
    .then((res)=>{
      // toast.success(res.data.message)
      dispatch({
        type: ADJUST_QUANTITY_SUC,
        payload:{
          id: id,
          qty: parseInt(qty),
        }
      });
    })
    .catch((error)=>{
      toast.warn(error.response.data.message,{autoClose:2000})
      dispatch({
        type: ADJUST_QUANTITY_ERR,
        payload: error.response.data.message
      });
    })
  };
};
//empty cart
export const  emptyCart = ()=>{
  return function(dispatch){
     dispatch({
      type:EMPTY_CART
     })
     const token =localStorage.getItem("token")
    const config={
       headers:{
         token:token
       }
     }
     axios.delete("http://localhost:5001/cart/empty-cart",config)
     .then((res)=>{
         console.log(res.data)
     }).catch((error)=>{
      console.log(error)
     })
  }
}
