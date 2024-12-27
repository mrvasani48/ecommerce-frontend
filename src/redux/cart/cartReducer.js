import {
  GET_CART_REQ,
  GET_CART_SUC,
  GET_CART_ERR,
  ADD_CART_REQ,
  ADD_CART_SUC,
  ADD_CART_ERR,
  REMOVE_CART_REQ,
  REMOVE_CART_SUC,
  REMOVE_CART_ERR,
  ADJUST_QUANTITY_REQ,
  ADJUST_QUANTITY_SUC,
  ADJUST_QUANTITY_ERR,
  EMPTY_CART,
} from "./cartType";
const intialState = {
  cart: [],
  error: [],
  loading: false,
};
export const cartReducer = (state = intialState, action) => {
  // console.log(action);
  switch (action.type) {

    case GET_CART_REQ:
      return { ...state, loading: true };
    case GET_CART_SUC:
      return { ...state, cart: action.payload, loading: false };
    case GET_CART_ERR:
      return { ...state, error: action.payload, loading: false };

    case ADD_CART_REQ:
      return { ...state, loading: true };
    case ADD_CART_SUC:
      const check = state.cart.find((product) =>
        product.id == action.payload.id ? true : false
      );
      return {
        ...state,
        loading: false,
        cart: check
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...action.payload, qty: item.qty + 1 }
                : action.payload
            )
          : [...state.cart, { ...action.payload, qty: 1 }],
      };
    case ADD_CART_ERR:
      return { ...state, error: action.payload, loading: false };

    case REMOVE_CART_REQ:
      return { ...state, loading: true };

    case REMOVE_CART_SUC:
      //   console.log(action);
      const data = state.cart.filter((product) => product.id != action.payload);
      //   console.log(data);
      return { ...state, cart: data };

    case REMOVE_CART_ERR:
      return { ...state, error: action.payload, loading: false };

    case ADJUST_QUANTITY_REQ:
      return { ...state, loading: true };
    case ADJUST_QUANTITY_SUC:
        // console.log(action.payload.qty)
      const newPqty = state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, qty: action.payload.qty }
          : item
      );
      // console.log(action.payload.qty)
      return { ...state, cart: newPqty };
    case ADJUST_QUANTITY_ERR:
      return { ...state, error: action.payload, loading: false };

    case EMPTY_CART:
      return { ...state,cart:[], error:[], loading: false };
   
    default:
      return state;
  }
};
