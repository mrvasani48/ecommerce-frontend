import axios from 'axios'
import { toast } from 'react-toastify'
import { REQ_ADD_ORDER , SUCCESS_ADD_ORDER, ERR_ADD_ORDER
        ,REQ_GET_ORDER , SUCCESS_GET_ORDER, ERR_GET_ORDER
        ,REQ_ALL_ORDER , SUCCESS_ALL_ORDER, ERR_ALL_ORDER
        ,REQ_CANCEL_ORDER,SUCCESS_CANCEL_ORDER,ERR_CANCEL_ORDER
        ,SUCCESS_DOWNLOAD_ORDER,ERR_DOWNLOAD_ORDER, REQ_DOWNLOAD_ORDER
     } from  './orderType'
import { emptyCart } from '../cart/cartAction'
//place order action
export const placeOrder = (data,navigate)=>{   
    return function (dispatch){
       dispatch({
           type:REQ_ADD_ORDER
       })
       const token=localStorage.getItem("token")
       const headers= {
           headers:{
               token:token
           }
       }
       axios.post("http://localhost:5001/order/add-order",data,headers)
       .then((res)=>{
        //    console.log(res.data.message) 
           navigate('/p/order')    
           toast.success(res.data.message)
           dispatch({
            type:SUCCESS_ADD_ORDER,
            payload:res.data.data
        })
            dispatch(emptyCart())
       })
       .catch((error)=>{
           toast.warn(error.response.data.message)
           dispatch({
            type:ERR_ADD_ORDER,
            payload:error.response.data.message
        })
       })
    }
}
//get order  action
export const getOrder = ()=>{   
    return function (dispatch){
       dispatch({
           type:REQ_GET_ORDER
       })
       const token=localStorage.getItem("token")
       const headers= {
           headers:{
               token:token
           }
       }
       axios.get("http://localhost:5001/order/get-order",headers)
       .then((res)=>{
            // console.log(res.data.data)    
        //    toast.success(res.data.message)   
           dispatch({
            type:SUCCESS_GET_ORDER,
            payload:res.data.data
        })
       })
       .catch((error)=>{
           toast.warn(error.response.data.message)
           dispatch({
            type:ERR_GET_ORDER,
            payload:error.response.data.message
        })
       })
    }
}
//delete order action
export const deleteOrder=(id)=>{
    return function (dispatch) {
        dispatch({
            type:REQ_CANCEL_ORDER
        })
        const token =localStorage.getItem("token")
        const config ={
            headers:{
                token:token
            }
        }
        const data= {
            id:id
        }
        axios.patch("http://localhost:5001/order/cancel-order",data,config)
        .then((res)=>{
            toast.warn(res.data.message)
            dispatch({
                type:SUCCESS_CANCEL_ORDER,
                payload:id
            })
        })   
        .catch((error)=>{
            dispatch({
                type:ERR_CANCEL_ORDER,
                payload:error.message
            })
        })
      
    }
}
//download order invoice
export const orderInvoice =(id)=>{
return function(dispatch){
   dispatch({
       type:REQ_DOWNLOAD_ORDER
   })
   axios.get(`http://localhost:5001/order/order-invoice/${id}`)
   .then((res)=>{
       
    //for download order invoice pdf
    var link=document.createElement('a');
    document.body.appendChild(link);
    link.href= `http://localhost:5001/order/order-invoice/${id}`;
    link.download ='';
    link.click();
    
     dispatch({
        type:SUCCESS_DOWNLOAD_ORDER
    })
   }).catch((error)=>{
       console.log(error.message)
       dispatch({
        type:ERR_DOWNLOAD_ORDER
    })
   })
 } 
}
//get all order action
export const getallOrder = ()=>{   
    return function (dispatch){
       dispatch({
           type:REQ_ALL_ORDER
       })
       axios.get("http://localhost:5001/order/all-order")
       .then((res)=>{
            // console.log(res.data.data)    
        //    toast.success(res.data.message)   
           dispatch({
            type:SUCCESS_ALL_ORDER,
            payload:res.data.data
        })
       })
       .catch((error)=>{
           toast.warn(error.response.data.message)
           dispatch({
            type:ERR_ALL_ORDER,
            payload:error.response.data.message
        })
       })
    }
}