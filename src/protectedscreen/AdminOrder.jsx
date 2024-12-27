import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getallOrder } from "../redux/order/orderAction";

const AdminOrder=()=>{
  const dispatch = useDispatch();
  //get order from redux store
  const orderCompleted = useSelector((state) => state.order.allorder);
  // console.log(orderCompleted);
  useEffect(() => dispatch(getallOrder()), []);
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-3">
          <table className="table text-center">
            <thead >
              <th>Order</th>
              <th>Details</th>
              <th>Delivery Charge</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Order Date</th>
              <th>User</th>
              <th>Order-Cancel</th>
            </thead>
            <tbody className="mt-2">
              {orderCompleted?.map((orderIt, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    {/* product details */}
                    <table className="table mt-4">
                      <thead>
                        <th>product</th>
                        <th>order details</th>
                        <th>price</th>
                        <th>quantity</th>
                        <th>sub total</th>
                      </thead>
                      <tbody>
                        {orderIt?.product?.map((product, index) => (
                          <tr className="table-active" key={index}>
                            <td>{index + 1}</td>
                            <td>{product?.title}</td>
                            <td>{product?.price}</td>
                            <td>{product?.qty}</td>
                            <td>{product?.qty * product?.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td>{orderIt?.shippingCarge}</td>
                  <td>{orderIt?.totalPrice}</td>
                  <td>{orderIt?.PaymentOption}</td>
                  <td>{orderIt?.order_at.slice(0, 10)}</td>
                  {/* user details */}
                  <td>
                    <table className="table mt-3">
                      <tbody>
                        <tr>
                          <th>user </th>
                          <td>
                            {orderIt.userDetails.fname +
                              orderIt.userDetails.lname}
                          </td>
                        </tr>
                        <tr>
                          <th>Address </th>
                          <td>
                            {orderIt.userDetails.address +
                              "," +
                              orderIt.userDetails.state +
                              "," +
                              orderIt.userDetails.zipcode}
                          </td>
                        </tr>
                        <tr>
                          <th>phone</th>
                          <td>{orderIt.userDetails.phone}</td>
                        </tr>
                        <tr>
                          <th>email</th>
                          <td>{orderIt.userDetails.email}</td>
                        </tr>
                        <tr>
                          <th>order notes</th>
                          <td>{orderIt.userDetails.ordernotes?orderIt.userDetails.ordernotes:"no order notes"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>{orderIt.cancel_at?"true":"False"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default AdminOrder;