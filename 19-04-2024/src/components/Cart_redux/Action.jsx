import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./constant";


export const addToCart = (data) =>{
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
export const EmptyCart = () =>{
    console.warn("EmptyCart called");
    return{
        type:EMPTY_CART,
    }
}
