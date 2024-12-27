import axios from "axios";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import {
  ERR_PRODUCT,
  GET_PRODUCT,
  REQ_PRODUCT,
  REQ_ADD_PRODUCT,
  SUCCESS_ADD_PRODUCT,
  ERR_ADD_PRODUCT,
  REQ_UPDATE_PRODUCT,
  SUCCESS_UPDATE_PRODUCT,
  ERR_UPDATE_PRODUCT,
  REQ_DELETE_PRODUCT,
  ERR_DELETE_PRODUCT,
  SUCCESS_DELETE_PRODUCT,
} from "./productType";

export const getProduct = () => {
  return function (dispatch) {
    dispatch({
      type: REQ_PRODUCT,
    });
    axios
      .get("http://localhost:5001/product")
      .then((responce) => {
        dispatch({
          type: GET_PRODUCT,
          payload: responce.data,
        });
      })
      .catch((error) => {
        toast.warn(error.response.data.message);
        dispatch({
          type: ERR_PRODUCT,
          payload: error,
        });
      });
  };
};

export const addProduct = (productdata) => {
  return function (dispatch) {
    const newProductData = {
      id: productdata.id,
      title: productdata.title,
      price: productdata.price,
      description: productdata.description,
      category: productdata.category,
      image: productdata.image,
      rating: {
        rate: productdata.rate,
        count: productdata.count,
      },
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({
      type: REQ_ADD_PRODUCT,
    });
    axios
      .post("http://localhost:5001/product/add-product", newProductData, config)
      .then((res) => {
        // console.log(res.data);
        toast.success(res.data.message);
        dispatch({
          type: SUCCESS_ADD_PRODUCT,
          payload: res.data,
        });
      })
      .catch((error) => {
        toast.warn(error.response.data.message);
        dispatch({
          type: ERR_ADD_PRODUCT,
          payload: error.response.data.message,
        });
      });
  };
};

export const updateProduct = (productdata,navigate) => {
  return function (dispatch) {
    dispatch({
      type: REQ_UPDATE_PRODUCT,
    });
    const updateData = {
      id: productdata.id,
      title: productdata.title,
      price: productdata.price,
      description: productdata.description,
      category: productdata.category,
      image: productdata.image,
      rating: {
        rate: productdata.rate,
        count: productdata.count,
      },
    };
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // console.log("action", updateData);
    axios
      .patch(
        `http://localhost:5001/product/update-product/${updateData.id}`,
        updateData,
        config
      )
      .then((res) => {
        // console.log(res);
        navigate('/p/product')
        toast.success(res.data.message);
        dispatch({
          type: SUCCESS_UPDATE_PRODUCT,
          payload: res.data,
        });
      })
      .catch((error) => {
        toast.warn(error.response.data.message);
        dispatch({
          type: ERR_UPDATE_PRODUCT,
          payload: error.response.data.message,
        });
      });
  };
};

export const deleteProduct = (id) => {
  return function (dispatch) {
    dispatch({
      type: REQ_DELETE_PRODUCT,
    });
    axios
      .patch(`http://localhost:5001/product/delete-product/${id}`)
      .then((res) => {
        // console.log(res.data.message);
        toast.success(res.data.message);
        dispatch({
          type: SUCCESS_DELETE_PRODUCT,
          payload:id
        });
      })
      .catch((error) => {
        toast.warn(error.response.data.message);
        dispatch({
          type: ERR_DELETE_PRODUCT,
          payload: error.response.data.message,
        });
      });
  };
};
