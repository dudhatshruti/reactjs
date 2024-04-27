import Reducer from "./Reducer";
import ProductReducer from "./ProductRedux/productReducer";
import {combineReducers} from 'redux'



const RootReducer =  combineReducers({
    Reducer,
    ProductReducer
})

export default RootReducer