import React from 'react'

const Profile =()=>{
   //get profile info from localStorage
   const profile=localStorage.getItem("profile")
   const userDetails=JSON.parse(profile)

 return(
    <div className="container py-5">
    <div className="row">
      <div className="col-lg-4">
        <div className="card mb-4">
          <div className="card-body text-center">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar" className="rounded-circle img-fluid" style={{width: '150px'}} />
            <h5 className="my-3">{userDetails.name}</h5>
            <p className="text-muted mb-4">141, Bay Area, {userDetails.city},</p>
          </div>
        </div>
        
      </div>
      <div className="col-lg-8">
        <div className="card mb-4">
          <div className="card-body">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Full Name</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.name}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">User Id </p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails._id}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Email</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.email}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Mobile</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.number}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Role</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.role}</p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">City</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">{userDetails.city}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 )
}
export default Profile