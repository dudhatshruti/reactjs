import { ADD_TO_CART , REMOVE_TO_CART } from "./constant";
import { INCREMENT , DECREMENT } from "./constant";


export const addToCart = (data = []) =>{
    console.warn("addToCart called" , data);
    return{
        type:ADD_TO_CART,
    }
}

export const RemoveToCart = (data) =>{
    console.warn("removeToCart called" , data);
    return{
        type:REMOVE_TO_CART,
    }
}

export const Increment = (data) =>{
    console.warn("Increment called" , data);
    return{
        type:INCREMENT,
        data
    }
}

export const Decrement = (data) =>{
    console.warn("Decrement called" , data);
    return{
        type:DECREMENT,
        data
    }
}