import Reducer from "./Cart/CartReducer";
import ProductReducer from "./ProductRedux/ProductReducer";
import { combineReducers } from "redux";

const RootReducer =  combineReducers({
    Reducer,
    ProductReducer
})

export default RootReducer