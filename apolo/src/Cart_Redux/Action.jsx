import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART } from "./Constant";

export const AddToCart = (data = []) => {
    console.warn("addToCart called",data);
    return{
        type:ADD_TO_CART,
    }
}

export const RemoveToCart = (data) => {
    console.warn("RemoveToCart called",data);
    return{
        type:REMOVE_TO_CART,
    }
}
export const Empty_Cart = () => {
    console.warn("EmptyCart called");
    return{
        type:EMPTY_CART,
    }
}

// export const Increment = (data) =>{
//     console.warn("Increment called" , data);
//     return{
//         type:INCREMENT,
//         data
//     }
// }

// export const Decrement = (data) =>{
//     console.warn("Decrement called" , data);
//     return{
//         type:DECREMENT,
//         data
//     }
// }