import React from 'react'
import { Navigate, Outlet} from 'react-router-dom'
const Auth=()=>{
  //fet login status from localStorage
  const isLogin = localStorage.getItem("islogin");
  // console.log(isLogin)
  return (
      <div>{  isLogin == "true" ? <Outlet/> : <Navigate to="/login" /> }</div>
  )
}
export default Auth;