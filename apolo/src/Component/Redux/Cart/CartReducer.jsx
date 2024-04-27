import { ADD_CART , REMOVE_CART} from "./Constant";

const initialState = {
    numOfProduct : 10,
}

export const ProductReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_CART: return{
            ...state,
            numOfProduct:state.numOfProduct + 1
        }
        case REMOVE_CART: return{
            ...state,
            numOfProduct: state.numOfProduct -1
        }
        default: return state
    }
}