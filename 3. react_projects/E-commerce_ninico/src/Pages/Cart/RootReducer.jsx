import Reducer from "./Redux/Cart_Redux/Cart_Reducer";
import ProductReducer from "./Redux/Product_Redux/Product_Reducer";
import { combineReducers } from "redux";

const RootReducer =  combineReducers({
    Reducer,
    ProductReducer
})

export default RootReducer