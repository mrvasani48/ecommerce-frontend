import { GET_BUYER_USER, ERR_BUYER_USER } from "./buyerType";

const intialState={
    buyer:[],
    error:[]
}
const userReducers=(state=intialState,action)=>{
    switch (action.type) {
        case GET_BUYER_USER:return {
            ...state,buyer:action.payload
                       }
                  break;
        case ERR_BUYER_USER: return {
            ...state,error:action.payload
                       }
                  break;
        default: return state
            break;
    }
}
export default userReducers

