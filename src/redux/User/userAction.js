import axios from "axios";
import { toast } from "react-toastify";

import {
  REQ_SIGNUP_USER,
  SUCCESS_SIGNUP_USER,
  ERR_SIGNUP_USER,
  REQ_LOGIN_USER,
  ERR_LOGIN_USER,
  SUCCESS_LOGIN_USER,
} from "./userTypes";
//user sign-up action
export const SignUp = ({data,navigate}) => {
  return function (dispatch) {
    dispatch({
      type: REQ_SIGNUP_USER,
    });
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      number:parseInt(data.mobile),
      city: data.city,
      role:data.role
    };
    // console.log(userData);
    const config ={
       headers:{
         "Content-Type": "application/json",
       }
    }
    axios.post("http://localhost:5001/user/signup",userData,config)
    .then((res)=>{
      //   console.log("then",res)
      navigate('/login')
        dispatch({
         type:SUCCESS_SIGNUP_USER,
         payload:res.data.data
    })
  
    })
    .catch((error)=>{
       toast.warn(error.response.data.message)
      //  console.log("catch",error);
      dispatch({
           type:ERR_SIGNUP_USER,
           payload:error.response.data.message
      })
    })
  };
};
//user sign-in action
export const userLogin = ({email,password,role,navigate})=>{
   return function (dispatch){
      dispatch({
        type:REQ_LOGIN_USER
      })
      const loginData={
          email:email,
          password:password,
          role:role
      }
      const config ={
        headers:{
          "content-type":"application/json"
        }
      }
      axios.post("http://localhost:5001/user/login",loginData,config)
      .then((res)=>{     
        toast.success("login successfully",{autoClose:2000})
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("profile",JSON.stringify(res.data.data))
        localStorage.setItem("islogin", "true");
        localStorage.setItem("role",role);
        navigate("/p/product");
        dispatch({
         type:SUCCESS_LOGIN_USER,
          payload:res?.data?.data
    })
      })
      .catch((error)=>{
        // toast.dismiss()
        // toast.error(error.message)
        toast.warn(error?.response?.data?.message)
        dispatch({
          type:ERR_LOGIN_USER,
          payload:error.response.data.message
        })
      })
   }
}

