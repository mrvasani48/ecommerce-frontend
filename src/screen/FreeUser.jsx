import React, { useState } from "react";
import { Userdata } from "../contexts/userContext";

export default function FreeUser() {

  const freeUser = Userdata();
  const [perticularUser, setPerUser] = useState([]);
  const [slice, setSlice] = useState(7);

  const moreDetails = (id) => {
    setPerUser(freeUser.filter((user) => user.id == id));
  };
  return (
    <div className="container">
      <div className="row">
        <table className="col-md table mt-5 ">
          <tbody>
            {freeUser.slice(0, slice).map((user, i) => (
              <React.Fragment key={i}>
                {i == 0 && (
                  <tr className="table-success">
                    <td>id</td>
                    <td>name</td>
                    <td>phone</td>
                    <td>username</td>
                    <td>website</td>
                    <td></td>
                  </tr>
                )}
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.username}</td>
                  <td>{user.website}</td>
                  <td>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                      onClick={() => moreDetails(user.id)}
                      className="btn btn-outline-primary"
                    >
                      more details
                    </button>

                    <div
                      className="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabIndex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              {perticularUser[0]?.name}
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="modal-body">
                            <p>
                              <b> user </b>: {perticularUser[0]?.id}
                            </p>
                            <p>
                              <b> name </b>:{perticularUser[0]?.name}
                            </p>
                            <p>
                              <b> phone</b> :{perticularUser[0]?.phone}
                            </p>
                            <p>
                              <b> username </b>:{perticularUser[0]?.username}
                            </p>
                            <p>
                              <b> website </b>: {perticularUser[0]?.website}
                            </p>
                            <p>
                              <b>Address </b>:
                              {perticularUser[0]?.address.street}
                              {perticularUser[0]?.address.suite} ,
                              {perticularUser[0]?.address.city} ,
                              {perticularUser[0]?.address.zipcode}
                            </p>
                            <b>company details</b>:
                            <p>
                              <b> name </b>:{perticularUser[0]?.company.name}
                            </p>
                            <p>
                              <b> working on </b>:
                              {perticularUser[0]?.company.catchPhrase}
                            </p>
                            <p>
                              <b> vision </b>:{perticularUser[0]?.company.bs}
                            </p>
                          </div>

                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {freeUser.length >= slice ? (
        <button
          className="col-md-2 offset-5 btn btn-outline-primary"
          onClick={() => setSlice(slice + 3)}
        >
          view more
        </button>
      ) : null}
    </div>
  );
}
