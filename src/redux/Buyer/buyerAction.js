import axios from "axios"
import { ERR_BUYER_USER, GET_BUYER_USER } from "./buyerType"

export const getBuyer= ()=>{
    return function (dispatch){
        axios.get("http://localhost:5001/reqres/users")
        .then((responce)=>{
             const userData=responce.data.data
            dispatch({
                type:GET_BUYER_USER,
                payload:userData
            })
        })
        .catch((error)=>{
            dispatch({
                type:ERR_BUYER_USER,
                payload:error
            })
        })
        
    }
}