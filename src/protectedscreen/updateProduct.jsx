import React from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { updateProduct } from "../redux/Product/productAction";

function UpdateProduct() {

 const navigate =useNavigate()
 const dispatch=useDispatch()
 const { id } = useParams();

 const products = useSelector((state) => state.product.product);
 const PerticularProduct = products.filter((product) => product.id == id);
 const product = PerticularProduct[0];

  const Formik = useFormik({
    initialValues: {
      id: product.id,
      title:product.title,
      price: product.price,
      description:product.description,
      category: product.category,
      image:product.image,
      count:product.rating.count,
      rate:product.rating.rate,
    },
    onSubmit: (data) => {
    //   console.log(data);
      dispatch(updateProduct(data,navigate))
    },
  });

  return (
    <div className="container">
      <div className="row">
        <h2 className="col-md-3 offset-md-5"> Update Product </h2>
        <form
          className="from col-md-6 offset-md-3"
          onSubmit={Formik.handleSubmit}
        >
          <div className="mb-3 row">
            <label  className="col-sm-2 col-form-label">Id : </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={Formik.values.id}
                onChange={Formik.handleChange}            
                disabled
                type="text"
                name="id"
                id="id"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Title : </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={Formik.values.title}
                onChange={Formik.handleChange}
                type="text"
                name="title"
                id="title"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Price : </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={Formik.values.price}
                onChange={Formik.handleChange}
                type="text"
                name="price"
                id="price"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Description: </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={Formik.values.description}
                onChange={Formik.handleChange}
                type="text"
                name="description"
                id="description"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Category:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={Formik.values.category}
                onChange={Formik.handleChange}
                type="text"
                name="category"
                id="category"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Image : </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={Formik.values.image}
                onChange={Formik.handleChange}
                type="url"
                id="image"
                name="image"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Count</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={Formik.values.count}
                onChange={Formik.handleChange}
                type="text"
                name="count"
                id="count"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label className="col-sm-2 col-form-label">Rate: </label>
            <div className="col-sm-10">
              <input
                className="form-control"
                value={Formik.values.rate}
                onChange={Formik.handleChange}
                type="text"
                name="rate"
                id="rate"
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn col-md-3 offset-md-5 btn-outline-success"
          >
            Update poduct
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProduct
