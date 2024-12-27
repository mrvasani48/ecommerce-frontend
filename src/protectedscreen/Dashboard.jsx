import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBuyer } from "../redux/Buyer/buyerAction";

const  Dashboard=()=> {
  const dispatch = useDispatch();
  //get data from redux store
  const buyerUser = useSelector((state) => state.buyer.buyer);
  // console.log("store",buyerUser);
  useEffect(() => {
    dispatch(getBuyer());
  }, []);

  return (
    <>
        <div className="container">
          <div className="row">
            <h1>User of Reqres</h1>

            {buyerUser.length == 0 ? (
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              buyerUser?.map((user, index) => (
                <div className="col-md mt-5 " key={index}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      className="card-img-top"
                      src={user.avatar}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">
                        {user.first_name} {user.last_name}
                      </h5>
                      <p className="card-text">
                        If opportunity doesn't knock, build a door.
                      </p>
                      <p
                        className="card-text"
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Tooltip on right"
                      >
                        email : {user.email}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
    </>
  );
}
export default Dashboard