import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate,Navigate } from "react-router-dom";
import {userLogin} from '../redux/User/userAction'
import "../assets/css/login.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch =useDispatch()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const islogin =localStorage.getItem("islogin")

  // console.log(role);
  const login = (e) => {
    e.preventDefault();
    dispatch(userLogin({email,password,role,navigate}))
  };
  return (
    <div className="container">
      <div className="row">
        {
          islogin=="true"?<h3 className="col-md-5 offset-md-3  text-center mt-4">
          Already login
        </h3> :<>
          <h3 className="col-md-5 offset-md-3 text-secondary text-center mt-4">
          Sign-In
        </h3>
        <form className="col-md-5 offset-md-3">
          <div>
            <label className="form-label">Email :</label>
            <input
              type="email"
              value={email}
              className="form-control"
              autoComplete="on"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div>
            <label className="form-label">Password :</label>
            <input
              type="password"
              value={password}
              className="form-control"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div >
            <div className="form-label">Role  : </div>
               <select onChange={(e)=>setRole(e.target.value)} defaultValue="user" className="form-select">
                 <option  value='user'>User</option>
                 <option value='admin'>Admin</option>
               </select>
          </div>
          <div className="mt-3">
            <button className="btn btn-outline-success" onClick={login}>
              sign-in
            </button>
            <NavLink className="signup-link" to="/sign-up">
              New User Please Sign-up
            </NavLink>
          </div>
        </form>
        </>
        }     
      </div>
    </div>
  );
}
