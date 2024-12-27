import {
  REQ_ADD_ORDER,
  SUCCESS_ADD_ORDER,
  ERR_ADD_ORDER,
  REQ_GET_ORDER,
  SUCCESS_GET_ORDER,
  ERR_GET_ORDER,
  REQ_CANCEL_ORDER,
  SUCCESS_CANCEL_ORDER,
  ERR_CANCEL_ORDER,
  REQ_ALL_ORDER,
  SUCCESS_ALL_ORDER,
  ERR_ALL_ORDER,
} from "./orderType";
const intialState = {
  loading: false,
  order: [],
  error: [],
  orderInvoice: [],
  allorder:[]
};
const orderReducer = (state = intialState, action) => {
  // console.log("reducer",action)
  switch (action.type) {
    case REQ_GET_ORDER:
      return { ...state, loading: true };
    case SUCCESS_GET_ORDER:
      return { ...state, order: action.payload, loading: false };
    case ERR_GET_ORDER:
      return { ...state, error: action.payload, loading: false };

    case REQ_ADD_ORDER:
      return { ...state, loading: true };
    case SUCCESS_ADD_ORDER:
      return {
        ...state,
        order: [...state.order, action.payload],
        loading: false,
      };
    case ERR_ADD_ORDER:
      return { ...state, error: action.payload, loading: false };

    case REQ_CANCEL_ORDER:
      return { ...state, loading: true };
    case SUCCESS_CANCEL_ORDER:
      const Order = state.order.filter((order) => order._id !== action.payload);
      return {
        ...state,
        order:Order ,
        loading: false,
      };
    case ERR_CANCEL_ORDER:
      return { ...state, error: action.payload, loading: false };
    
      case REQ_ALL_ORDER:
        return { ...state, loading: true };
      case SUCCESS_ALL_ORDER:
        return { ...state, allorder: action.payload, loading: false };
      case ERR_ALL_ORDER:
        return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};
export default orderReducer;
