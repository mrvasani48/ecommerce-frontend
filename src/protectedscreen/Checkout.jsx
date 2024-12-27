import React, { useEffect, useState } from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getCartProduct } from "../redux/cart/cartAction";
import { placeOrder } from "../redux/order/orderAction";
import '../assets/css/checkout.css'
import { useNavigate } from "react-router";
const Checkout = () => {
  
  const dispatch = useDispatch();
  const navigate=useNavigate()
  
  const cartItems = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState();
  const [shippingCharge, setShippingCharge] = useState(0);
  const [Payment, setPayment] = useState("cash on delivery");
  
  useEffect(() => dispatch(getCartProduct()), []);

  useEffect(() => {
    let price = 0;
    cartItems?.cart?.map((product) => {
      price = price + product.price * product.qty;
    });
    setTotalPrice(price);
  }, [cartItems]);
  
  useEffect(() => console.log(shippingCharge), [shippingCharge]);

  return (
    <div className="container">
      <div className="row">
      <div className="col-md-6 border">
      <h2 className="mt-3 text-center">product details</h2>
          <table className="table">
            <thead>
              <th style={{ width: "200px" }}>Product</th>
              <th>price</th>
              <th>Quantity</th>
              <th>total</th>
            </thead>
            <tbody>
              {cartItems.cart.map((product, index) => (
                <tr key={index}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>{product.qty}</td>
                  <td>${product.price * product.qty}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row mt-3">
            <div className="col-md-3 offset-md-6 text-center"> <b>Sub Total : </b></div>
            <div className="col-md-3 "> ${totalPrice}</div>
          </div>
          <div className="fs-20">
            <b>Shipping : </b>
          </div>
          <div className="row mt-1 ">
            <div className="form-check">
              <input
                defaultChecked
                onClick={(e) => setShippingCharge(e.target.value)}
                value="0"
                style={{marginLeft:"78px"}}
                className="form-check-input"
                name="flexRadio"
                type="radio"
                id="freeShipping"
              />
              <label htmlFor="freeShipping" className="form-check-label ml-1">free Shipping : 0</label>
            </div>
            <div className="form-check">
              <input
                onClick={(e) => setShippingCharge(e.target.value)}
                value="40"
                className="form-check-input"
                style={{marginLeft:"78px"}}
                name="flexRadio"
                type="radio"
                id="stadard"
              />
              <label htmlFor="stadard" className="form-check-label ml-1">Standard : 40</label>
            </div>
            <div className="form-check">
              <input
                onClick={(e) => setShippingCharge(e.target.value)}
                value="50"
                className="form-check-input"
                name="flexRadio"
                style={{marginLeft:"78px"}}
                type="radio"
                id="express"
              />
              <label htmlFor="express" className="form-check-label ml-1">Express: 50</label>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-5 offset-md-5 text-center">
              <b > Shipping Charge : </b>
            </div>
            <div className="col-md-2 ">
            ${parseInt(shippingCharge)}
            </div>
          </div>

          <div className="fs-20">
            <b>Payment : </b>
          </div>
          <div className="row mt-1">
            <div className="form-check">
              <input
                defaultChecked
                onClick={(e) => setPayment(e.target.value)}
                style={{marginLeft:"78px"}}
                value="cas on delivery"
                className="form-check-input"
                name="paymentRadio"
                id="codRadio"
                type="radio"
              />
              <label htmlFor="codRadio" className="form-check-label ml-1">cash on Delivery</label>
            </div>
            <div className="form-check">
              <input
                onClick={(e) => setPayment(e.target.value)}
                style={{marginLeft:"78px"}}
                value="credit card"
                className="form-check-input"
                name="paymentRadio"
                id="creditcardRadio"
                type="radio"
              />
              <label  htmlFor="creditcardRadio" className="form-check-label ml-1">Credit Card </label>
            </div>
            <div className="form-check">
              <input
                onClick={(e) => setPayment(e.target.value)}
                style={{marginLeft:"78px"}}
                value="debit card"
                className="form-check-input"
                name="paymentRadio"
                id="debitcard"
                type="radio"
              />
              <label  htmlFor="debitcard" className="form-check-label ml-1">Debit Card </label>
            </div>
        
          <div className="form-check">
            <input
              onClick={(e) => setPayment(e.target.value)}
              style={{marginLeft:"78px"}}
              value="upi"
              className="form-check-input"
              name="paymentRadio"
              id="UpiRadio"
              type="radio"
            />
            <label  htmlFor="UpiRadio" className="form-check-label ml-1">UPI </label>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-3 offset-md-6 text-center">
              <b> Total : </b>
            </div>
            <div className="col-md-3 ">
            ${totalPrice + parseInt(shippingCharge)}
            </div>
          </div>

          
        </div>
        <div className="col-md-6 border">
          <h2 className="mt-3 text-center">User details</h2>
          <Formik
            initialValues={{
              fname: "",
              lname: "",
              companyname: "",
              country: "",
              state: "",
              zipcode: "",
              phone: "",
              email: "",
              address: "",
              ordernotes: "",
            }}
            onSubmit={(values) => {
              const orderDetails = {
                userDetails: values,
                shippingCharge: shippingCharge,
                product: cartItems.cart,
                totalPrice: totalPrice + parseInt(shippingCharge),
                PaymentOption: Payment,
              };
              // console.log(orderDetails)
              dispatch(placeOrder(orderDetails,navigate));
            }}
          >
            <Form className="form mt-3">
              <div className="row mt-1">
                <div className="col-md-6">
                  <label className="form-label">First Name :</label>
                  <Field
                    className="form-control"
                    name="fname"
                    id="fname"
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name :</label>
                  <Field
                    className="form-control"
                    name="lname"
                    id="lname"
                    type="text"
                  />
                </div>
              </div>

              <label className="form-label mt-1">Company Name :</label>
              <Field
                className="form-control"
                name="companyname"
                id="companyname"
                type="text"
              />
              <label className="form-label mt-1">Country : </label>
              <Field
                className="form-control"
                name="country"
                id="country"
                type="text"
              />

              <label className=" mt-1">Street Address * : </label>
              <Field
                name="address"
                id="address"
                className="form-control"
                placeholder=""
                component="textarea"
                style={{ height: "100px" }}
              ></Field>

              <div className="row mt-1">
                <div className="col-md-6">
                  <label className="form-label">State : </label>
                  <Field
                    className="form-control"
                    name="state"
                    id="state"
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Zipcode : </label>
                  <Field
                    className="form-control"
                    name="zipcode"
                    id="zipcode"
                    type="text"
                  />
                </div>
              </div>
              <div className="row mt-1">
                <div className="col-md-6">
                  <label className="form-label">Phone : </label>
                  <Field
                    className="form-control"
                    name="phone"
                    id="phone"
                    type="text"
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email : </label>
                  <Field
                    className="form-control"
                    name="email"
                    id="email"
                    type="email"
                  />
                </div>
              </div>

              <label className="form-label mt-1">
                Order notes (optional) :{" "}
              </label>
              <Field
                className="form-control"
                component="textarea"
                placeholder="Leave a comment here"
                id="ordernotes"
                name="ordernotes"
                style={{ height: "100px" }}
              ></Field>
              <button className="mt-3 btn  btn-outline-success" type="submit">
                place order{" "}
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
