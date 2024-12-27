import React from 'react'
import { NavLink } from 'react-router-dom'
import welcome from '../assets/image/welcome.jpg'
import '../assets/css/home.css'
const Home =()=>{
 
    return(
        <div className="container">
            <div className='row'>
               <div className='col-md-5 col-sm-6 offset-md-2 mt-5'>
                    <img height="430px" alt="welcome" width="inherit" src={welcome}></img>
               </div>
               <div className='col-md-5  col-sm-6 mt-5 '>
                 <h1 className=' mt-5 '>Extend a warm welcome!! </h1>
                 <h3 className=' mt-5 '>Click  for products, brands and many more </h3>
                 <NavLink className="link" to='/p/product' >Click Me</NavLink>
               </div>
            </div>
         
        </div>
    )
}
export default Home

