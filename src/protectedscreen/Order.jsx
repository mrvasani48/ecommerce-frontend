import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOrder, getOrder, orderInvoice } from "../redux/order/orderAction";

function Order() {
  const dispatch = useDispatch();
  //get order form redux store
  const order = useSelector((state) => state.order);
//   console.log("order", order?.order);
  useEffect(() => dispatch(getOrder()), []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <table className="table text-center">
            <thead>
              <th>order</th>
              <th>details</th>
              <th>delivery charge</th>
              <th>total price</th>
              <th>payment</th>
              <th>order date</th>
              <th>action</th>
            </thead>
            <tbody>
              {order?.order?.map((orderIt, index) => (
                <tr key={index}  >
                  <td>{index+1}</td>
                  <td>
                    <table className="table">
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
                            <td>{index+1}</td>
                            <td>{product?.title}</td>
                            <td>{product?.price}</td>
                            <td>{product?.qty}</td>
                            <td>{product?.qty*product?.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </td>
                  <td>{orderIt?.shippingCarge}</td>
                  <td>{orderIt?.totalPrice}</td>
                  <td>{orderIt?.PaymentOption}</td>
                  <td>{orderIt?.order_at.slice(0,10)}</td>       
                  <td>
                      <button className="btn btn-outline-danger" onClick={()=>dispatch(deleteOrder(orderIt._id))}>Cancel order</button>
                  </td>
                  <td>
                      <button className="btn btn-outline-success" onClick={()=>dispatch(orderInvoice(orderIt._id ))}>download invoice</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Order;
