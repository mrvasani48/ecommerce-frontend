import { ERR_PRODUCT, GET_PRODUCT,REQ_PRODUCT, REQ_ADD_PRODUCT,SUCCESS_ADD_PRODUCT,ERR_ADD_PRODUCT, REQ_UPDATE_PRODUCT, SUCCESS_UPDATE_PRODUCT, ERR_UPDATE_PRODUCT, REQ_DELETE_PRODUCT, SUCCESS_DELETE_PRODUCT, ERR_DELETE_PRODUCT} from "./productType"

const initialState ={
    product:[],
    error:[],
    loading:false
}
const productReducers=(state=initialState,action)=>{

  switch(action.type){
      case REQ_PRODUCT : return {
        ...state,loading:true
      }
      case GET_PRODUCT : return {
        ...state,product:action.payload,loading:false
      }
      case ERR_PRODUCT: return{
          ...state,error:action.payload,loading:false 
      }
      case REQ_ADD_PRODUCT:return{
        ...state,loading:true
      }
      case SUCCESS_ADD_PRODUCT:return{
        ...state,product:[...state.product,action.payload.data]
      }
      case ERR_ADD_PRODUCT:return{
        ...state,error:action.payload,loading:false 
      }
      case REQ_UPDATE_PRODUCT:return{
        ...state,loading:true
      }
      case SUCCESS_UPDATE_PRODUCT:return{
        ...state,product:[...state.product,action.payload.data]
      }
      case ERR_UPDATE_PRODUCT:return{
       ...state,error:action.payload,loading:false 
      }
      
      case REQ_DELETE_PRODUCT:return{
        ...state,loading:true
      }
      case SUCCESS_DELETE_PRODUCT:
        const deleteProduct=state.product.filter(product=>product.id!=action.payload)
        return{
       ...state,product:deleteProduct,loading:false 
      }
      case ERR_DELETE_PRODUCT:return{
       ...state,error:action.payload,loading:false 
      }
      default : return state
  }

}
export default productReducers