import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import validationSchema from "../utils/SIgnupValidation";
import "../assets/css/signup.css";
import { useDispatch } from "react-redux";
import {SignUp} from '../redux/user/userAction'

export default function Signup() {
  const navigate = useNavigate();
  const dispatch= useDispatch()
  const islogin=localStorage.getItem('islogin')
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
      mobile: "",
      city: "",
      role:""
    },
    validationSchema:validationSchema,
    onSubmit: (data) => {
      console.log(data)
      dispatch(SignUp({data,navigate}))
    },
  }); 
  return (
    <div className="container">
      <div className="row">
        {
          islogin=="true"?
          <h2 className="col-md-6 offset-md-3 text-center">
          please logout 
        </h2>
          :
          <>
          <h2 className="col-md-6 offset-md-3 text-center text-secondary">
          Sign-up
        </h2>

        <form onSubmit={formik.handleSubmit} className="col-md-6 offset-md-3">
          <div>
            <label className="form-label">Name* :</label>
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </div>
          <p className="text-danger">
            {formik.errors.name ? formik.errors.name : null}
          </p>

          <div>
            <label className="form-label">Email* : </label>
            <input
              type="text"
              name="email"
              id="email"
              className="form-control"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
          <p className="text-danger">
            {formik.errors.email ? formik.errors.email : null}
          </p>

          <div>
            <label className="from-label">Password* :</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <p className="text-danger">
            {formik.errors.password ? formik.errors.password : null}
          </p>
          <div>
            <label className="form-label"> Confirm Password* :</label>
            <input
              type="password"
              name="confirmpassword"
              id="confirmpassword"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
          </div>
          <p className="text-danger">
            {formik.errors.confirmpassword
              ? formik.errors.confirmpassword
              : null}
          </p>
          <div>
            <label className="form-label">Mobile Number* : </label>
            <input
              type="text"
              name="mobile"
              id="mobile"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.number}
            />
          </div>
          <p className="text-danger">
            {formik.errors.mobile ? formik.errors.mobile : null}
          </p>
          <div>
            <label className="form-label">City : </label>
            <input
              type="text"
              name="city"
              id="city"
              className="form-control"
              onChange={formik.handleChange}
              value={formik.values.city}
            />
          </div>
          <p className="text-danger">
            {formik.errors.role ? formik.errors.role : null}
          </p>
          <div>
            <label className="form-label ">Role* : </label>
            <span className="p-1"> User</span> 
            <input
              type="radio"
              name="role"
              id="user"
              className="p-1"
              onChange={formik.handleChange}
              value="user"
              // checked={formik.values.role === 'user'}
            />
            <span className="p-1"> Admin</span>
            <input
              type="radio"
              name="role"
              id="admin"
              className="p-1"
              onChange={formik.handleChange}
              value="admin"
              // checked={formik.values.role === 'admin'}
            />
          </div>

          <div className="mt-3">
            <button  className="btn btn-outline-success"  type="submit">Sign-Up</button>
            <Link className="login-link" to="/login">
              Already Registered Please Login !!{" "}
            </Link>
          </div>
        </form>
        </>

        }
       
      </div>
    </div>
  );
}
