import {GET_WISHLIST_REQ,GET_WISHLIST_SUC,GET_WISHLIST_ERR,
        ADD_WISHLIST_REQ,ADD_WISHLIST_SUC,ADD_WISHLIST_ERR,
        RMV_WISHLIST_REQ,RMV_WISHLIST_SUC,RMV_WISHLIST_ERR
       } from './wishlistType.js'

const initialState ={
    wishlistproduct:[],
    error:[],
    loading:false
}
const wishlistReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_WISHLIST_REQ:return {
            ...state,loading:true
        }
        case GET_WISHLIST_SUC:return {
            ...state,wishlistproduct:action.payload,loading:false
        }
        case GET_WISHLIST_ERR:return {
            ...state,error:action.payload,loading:false
        }  
        
        case ADD_WISHLIST_REQ:return {
            ...state,loading:true
        }
        case ADD_WISHLIST_SUC:return {
            ...state,wishlistproduct:[...state.wishlistproduct,action.payload],loading:false
        }
        case ADD_WISHLIST_ERR:return {
            ...state,error:action.payload,loading:false
        }  

        case RMV_WISHLIST_REQ:return {
            ...state,loading:true
        }
        case RMV_WISHLIST_SUC:
            // console.log(state.wishlistproduct);
            const remove=state.wishlistproduct.filter(product=> product._id!=action.payload)
            // console.log(action.payload);
            // console.log(remove);
            return {
          ...state,wishlistproduct:remove
        }
        case RMV_WISHLIST_ERR:return {
            ...state,error:action.payload,loading:false
        }  
     
        default: return state
    }
}
export default wishlistReducer