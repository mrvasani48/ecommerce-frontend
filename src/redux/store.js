import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import BuyerReducers from "./Buyer/buyerReducer";
import productReducers from "./Product/productReducer";
import userReducers from "./User/UserReducer";
import wishlistReducer from "./wishlist/wishlistReducer";
import orderReducer from "./order/orderReducer";
import { cartReducer } from "./cart/cartReducer";

import { composeWithDevTools } from "redux-devtools-extension";

const combineReducer = combineReducers({
  product: productReducers,
  buyer: BuyerReducers,
  user: userReducers,
  wishlist: wishlistReducer,
  cart: cartReducer,
  order: orderReducer,
});
const Store = createStore(
  combineReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
export default Store;
