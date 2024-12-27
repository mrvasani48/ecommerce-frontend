import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { getWishlist,removeFromWishlist } from "../redux/wishlist/wishlistaction";

function WishlistProduct() {

  const navigate= useNavigate()
  const dispatch = useDispatch();

  const data = useSelector((state) => state.wishlist);
  // console.log(data?.wishlistproduct.length);

  useEffect(() => dispatch(getWishlist()), []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2 className="text-center">Add to Wish List</h2>
          <table className="table">
            <thead> 
              {
                data?.wishlistproduct.length!==0 ? 
                 <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th className="text-center" scope="col">Image</th>
                <th scope="col"></th>
              </tr>:  
              <tr>
               <th>no product in wishlist shoping now : <NavLink to="/p/product">click me</NavLink></th>
               </tr>
              }
             
            </thead>
            <tbody>
              {data?.wishlistproduct.map((product, index) =>(
                <tr key={index}>
                  <th scope="row">{index+1}</th>
                  <td width="200px"><p>{product.product_id.title}</p></td>
                  <td>{product.product_id.price}</td>
                  <td>{product.product_id.category}</td>
                  <td>
                    <img height="200px" width="250px" alt="product img" src={product.product_id.image}></img>
                  </td>
                  <td><button onClick={()=>navigate(`/p/product/${product.product_id.id}`)} className="btn btn-outline-success">view product</button></td>
                  <td><button onClick={()=> dispatch(removeFromWishlist(product._id))} className="btn btn-outline-warning">remove product</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default WishlistProduct;
