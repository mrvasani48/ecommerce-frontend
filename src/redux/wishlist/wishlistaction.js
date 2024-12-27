import axios from "axios";
import { toast } from "react-toastify";
import {
  GET_WISHLIST_REQ,
  GET_WISHLIST_SUC,
  GET_WISHLIST_ERR,
  ADD_WISHLIST_REQ,
  ADD_WISHLIST_SUC,
  ADD_WISHLIST_ERR,
  RMV_WISHLIST_REQ,
  RMV_WISHLIST_SUC,
  RMV_WISHLIST_ERR,
} from "./wishlistType.js";

export const getWishlist = () => {
  return function (dispatch) {
    dispatch({
      type: GET_WISHLIST_REQ,
    });
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5001/wishlist/user-wishlist", {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        //   console.log(res.data.data)
        dispatch({
          type: GET_WISHLIST_SUC,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_WISHLIST_ERR,
          payload: error.message,
        });
      });
  };
};

export const addToWishlist = (id) => {
  return function (dispatch) {
    dispatch({
      type: ADD_WISHLIST_REQ,
    });
    const data = { id: id };
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        "content-type": "application/json",
        token: token,
      },
    };
    axios
      .post("http://localhost:5001/wishlist/add-wishlist", data, config)
      .then((res) => {
        // console.log(res)
        // alert(res.data.message);
        toast(res.data.message) ;
        dispatch({
          type: ADD_WISHLIST_SUC,
          payload: res.data.data,
        });
      })
      .catch((error) => {
        toast.warn(error.response.data.message);
        dispatch({
          type: ADD_WISHLIST_ERR,
          payload: error.response.data.message,
        });
      });
  };
};

export const removeFromWishlist=(id)=>{
  return function(dispatch) {
    dispatch({
      type:RMV_WISHLIST_REQ
    })
    
    axios.delete(`http://localhost:5001/wishlist/remove-from-wishlist/${id}`)
    .then((res)=>{
      toast.success("remove from wishlist successfully")
      //  console.log(res)
       dispatch({
        type:RMV_WISHLIST_SUC,
        payload:id,
      })
    })
    .catch((error)=>{
      // console.log(error)
      dispatch({
        type:RMV_WISHLIST_ERR,
        payload: error.response.data.message,
      })
    })
  }
}