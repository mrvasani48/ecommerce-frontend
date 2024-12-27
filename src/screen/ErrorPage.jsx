import React from "react";
import page_not_found from '../assets/image/page_not_found.jpg'
export default function Error() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-5 col-sm-6 offset-md-2 mt-5">
             <img height="320px" alt="error page img" width="inherit" src={page_not_found}></img>
        </div>
        <div className="col-md-4 offset-md-1 col-sm-6 mt-5 ">       
            <h2 style={{"margin-top":"100px"}}>There's nothing here!</h2>
        </div>
      </div>
    </div>
  );
}
