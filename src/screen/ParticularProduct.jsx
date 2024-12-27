import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addToWishlist } from "../redux/wishlist/wishlistaction";
import { addTocart } from "../redux/cart/cartAction";
import { toast } from "react-toastify";

function PerticularProduct() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.product);

  const ParticularProduct = products?.filter((product) => product.id == id);

  const wishlistHandler = (id) => {
    dispatch(addToWishlist(id));
  };
  console.log();
  return (
    <div className="container mt-5">
      {/*product */}
      <div className="row">
        {ParticularProduct?.map((product, index) => (
          <React.Fragment key={index}>
            <div className="col-md-6  col-sm text-center border border-light">
              <img
                src={product.image}
                className=""
                style={{ height: "317px", width: "fit-content" }}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <h5 className="card-title">{product.id}</h5>

                  <p className="card-text product-description">
                    {product.description}
                  </p>

                  <div>
                    Price :
                    <p className="badge rounded-pill bg-danger ">
                      &#x20B9;{Math.round(product.price * 76)}.00
                    </p>
                    <span className="badge rating text-dark  prise-badge">
                      Rating : {product.rating?.rate}
                      <span className="fa fa-star checked"></span>
                    </span>
                    <span> &#40;{product.rating?.count}&#41;</span>
                  </div>
                  <div>
                    <button
                      className="btn btn-outline-success"
                      onClick={() => {
                        wishlistHandler(id);
                      }}
                    >
                      add to wishlist
                    </button>
                    <button
                      className="btn btn-outline-success"
                      style={{ marginLeft: "40px" }}
                      onClick={() => dispatch(addTocart(product))}
                    >
                      add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default PerticularProduct;
