import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { deleteProduct, getProduct } from "../redux/Product/productAction";

function Product() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //get all product
  const productData = useSelector((state) => state.product.product);
  const userRole = localStorage.getItem("role");
  // console.log(productData);
  const [sortedProduct, setSortedProduct] = useState([]);
  const [sort, setSort] = useState();
  const [search, setSearch] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  useEffect(() => {
    setSortedProduct(productData);
    setSearchProduct(productData);
  }, [productData]);

  //sorting data
  const SortingHandler = () => {
    const array = [...productData];
    if (sort == "lowtohighprice") {
      //sorting low to high price 
      array.sort(function (x, y) {
        let a = x.price,
          b = y.price;
          // console.log(a,b);
        return a-b;
      });
    } else if (sort == "hightolowprice") {
      //sorting high to low price
      array.sort(function (x, y) {
        let a = x.price,
          b = y.price;
        return b-a;
      });
    }
    setSortedProduct(array);
  };
  useEffect(SortingHandler, [sort]);

  //search product
  const searchHandler = (e) => {
    setSearch(e.target.value);
    if (e.target.value.length >= 3) {
      const data = productData?.filter((val) =>
        val.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log(data)
      setSearchProduct(data);
    }
  };

  //delete 
  const deleteHandler =(id)=>{
    // console.log(id)
    dispatch(deleteProduct(id))
  }

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center">Product</h1>
        <div className="row">
          <div className="dropdown col-md-5 col-sm-6 ">
            <input
              className={
                search.length >= 3
                  ? "dropdown-toggle show rounded-pill p-2 "
                  : "dropdown-toggle rounded-pill p-2"
              }
              type="text"
              aria-expanded="false"
              placeholder="Search Product"
              onChange={(e) => searchHandler(e)}
            ></input>

            <ul
              className={
                search.length >= 3 ? "dropdown-menu show" : "dropdown-menu"
              }
            >
              {searchProduct?.length == 0 ? (
                <li>
                  <button className="dropdown-item">not found</button>
                </li>
              ) : (
                searchProduct?.map((val, index) => (
                  <li key={index}>
                    <button
                      className="dropdown-item"
                      onClick={() => navigate(`/p/product/${val.id}`)}
                    >
                      {val.title}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>

          <select
            className="rounded-pill p-2 col-md-2 offset-md-5  col-sm-6"
            onChange={(e) => setSort(e.target.value)}
            aria-label="Default select example"
          >
            <option rounded-pill defaultValue="" p-2>
              Sort By
            </option>
            <option rounded-pill p-2 value="lowtohighprice">
            low to  high price
            </option>
            <option rounded-pill p-2 value="hightolowprice">
            high to low  price
            </option>
          </select>
        </div>
        <div className="row ">
        {
           sortedProduct?.map((product, key) => (
             <React.Fragment key={key}>
             <div className="col-md-5 mt-4">
               <img src={product.image} style={{height:"350px",width:"268px"}} className="card-img-top" alt="..."/>
            </div>
             <div className="col-md-7 mt-4" >
               <div className="card-body">
                 <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="text-danger">Price : ${product.price}</p>
                  <p className="">Rating : {product.rating.rate} ({product.rating.count})</p>
                  
                  <button type="button" onClick={() => navigate(`/p/product/${product.id}`)} className="btn btn-outline-primary">
                        more details
                  </button>
                  {
                     userRole=="admin"&&
                     <>        
                      <button
                        type="button"
                        onClick={() => navigate(`/p/update-product/${product.id}`)}
                        className="btn btn-outline-success m-3"
                      >
                      update product
                      </button>
                      <button
                        type="button"
                        onClick={()=>deleteHandler(product.id)}
                        className="btn btn-outline-danger  m-3"
                      >
                        delete product
                      </button>
                     </>
                   }
                </div>
               </div>
            </React.Fragment>
           )
        )}
        </div>      
      </div>
    </div>
  );
}

export default Product;



//deleted 
{/* <table className="table   mt-3">
          <tbody>
            {productData?.length == 0  ? (
              <div className="text-center">
                <div className="spinner-border" role="status"></div>
              </div>
            ) : (
              sortedProduct?.map((product, key) => (
                <>
                  {key == 0 && (
                    <tr className="table-secondary">
                      <td>Id</td>
                      <td>Category</td>
                      <td>Description</td>
                      <td>Title</td>
                      <td>Price</td>
                      <td>Total Review</td>
                      <td>Rate</td> 
                      <td >Action</td>
                      <td ></td>
                      <td ></td>
                     
                    </tr>
                  )}
                  <tr >
                    <td>{product.id}</td>
                    <td>{product.category}</td>
                    <td>{product.description}</td>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>{product?.rating?.count}</td>
                    <td>{product?.rating?.rate}</td>
                    <td>
                      <button
                        type="button"
                        onClick={() => navigate(`/p/product/${product.id}`)}
                        className="btn btn-outline-primary"
                      >
                        more details
                      </button>
                    </td>
                   {
                     userRole=="admin"&&
                     <>
                     <td>
                      <button
                        type="button"
                        onClick={() => navigate(`/p/update-product/${product.id}`)}
                        className="btn btn-outline-success"
                      >
                      update product
                      </button>
                    </td>
                    <td>
                      <button
                        type="button"
                        onClick={()=>deleteHandler(product.id)}
                        className="btn btn-outline-danger"
                      >
                        delete product
                      </button>
                    </td>
                     </>
                   } 
                  </tr>
                </>
              ))
            )}
          </tbody>
        </table> */}