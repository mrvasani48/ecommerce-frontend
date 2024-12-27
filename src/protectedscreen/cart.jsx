import React, { Component, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate ,NavLink} from "react-router-dom";
import { removetocart, adjustQuantity, getCartProduct } from "../redux/cart/cartAction";

function CartProduct() {

  const navigate=useNavigate()
  const dispatch = useDispatch();

  //cart cartItems from redux store
  const cartItems = useSelector((state) => state.cart);
  const [totalPrice, setTotalPrice] = useState();

 //get cart action
  useEffect(()=>dispatch(getCartProduct()),[])
  
  useEffect(() => {
    let price = 0;
    cartItems?.cart?.map((product) => {
      price = price + product.price * product.qty;
    });
    //get price from each product and set total price 
    setTotalPrice(price);
  }, [cartItems]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <h2 className="text-center">your cart</h2>
          <table className="table">
            <thead>
              {cartItems?.cart?.length !== 0 ? (
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">product</th>
                  <th scope="col">img</th>
                  <td scope="col">Price</td>
                  <th scope="col">Quantity</th>
                  <th scope="col">Total</th>
                </tr>
              ) : (
                <tr>
                  <th>
                    no product in cart shopping now :{" "}
                    <NavLink to="/p/product">click me</NavLink>
                  </th>
                </tr>
              )}
            </thead>
            <tbody>
              {cartItems?.cart?.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td width="150px">
                    <p>{product?.title}</p>
                  </td>
                  <td>
                    <img
                      height="150px"
                      width="250px"
                      alt="product img"
                      src={product?.image}
                    ></img>
                  </td>
                  <td>${product?.price}</td>
                  <td>
                    <input
                      type="number"
                      className="form-control"
                      min={1}
                      step={1}
                      defaultValue={product?.qty}
                      cartItems-decimals={0}
                      onKeyDown={(e) => e.preventDefault()}
                      required
                      onClick={(e) => {
                        // console.log(e.target.value);
                        dispatch(adjustQuantity(product.id, e.target.value));
                      }}
                    ></input>
                  </td>
                  <td>${(product?.price * product?.qty)?.toFixed(2)}</td>
                  <td>
                    <button
                      onClick={() => dispatch(removetocart(product.id))}
                      className="btn btn-outline-danger"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="col-md-4">
          <div className="summary summary-cart">
            <h3 className="summary-title">Cart Total</h3>

            <table className="table table-summary">
              <tbody>
                <tr className="summary-subtotal">
                  <td>Subtotal:</td>
                  <td>${totalPrice?.toFixed(2)}</td>
                </tr>
               
                <tr className="summary-shipping-estimate">
                          <td>
                            Estimate for Your Country
                            <br />{" "}
                            <a
                              href="dashboard.html"
                              style={{ textDecoration: "none" }}
                            >
                              Change address
                            </a>
                          </td>
                          <td>&nbsp;</td>
                        </tr>
                <tr className="summary-total">
                  <td>Total Amount :</td>
                  <td>${(totalPrice )?.toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
            <button
             onClick={()=>navigate('/p/checkout')}
              className="btn btn-outline-primary-2 btn-order btn-block shadow-none"
              style={{ border: "1px solid #39f", fontSize: "1.4rem" }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
