import { ADD_CART,REMOVE_CART } from "./Constant";

export const AddToCart = (da) => {
    return {
        type : ADD_CART
    }
}

export const RemoveToCart = () => {
    return {
        type : REMOVE_CART
    }
}