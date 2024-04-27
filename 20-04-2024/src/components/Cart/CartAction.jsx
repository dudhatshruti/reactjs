import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART } from "../Constant";

export const addToCart = (data) =>{
    console.warn("addToCart action called" , data);
    return{
        type:ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) =>{1
    console.warn("removeToCart action called" , data);
    return{
        type:REMOVE_TO_CART,
        data
    }
}

export const emptyCart = () =>{
    console.warn("emptyCart action called");
    return{
        type:EMPTY_CART,
    }
}
