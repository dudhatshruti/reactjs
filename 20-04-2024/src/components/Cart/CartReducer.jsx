import { ADD_TO_CART,REMOVE_TO_CART,EMPTY_CART } from "../Constant";
const getCartDataFromLocalStorage = ()=>{
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData):[];
}
const Reducer = (state = getCartDataFromLocalStorage(), action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.warn('AddToCart Called', action);
            const updatedCartAdd = [action.data , ...state];
            localStorage.setItem('cart', JSON.stringify(updatedCartAdd))
            return updatedCartAdd

        case REMOVE_TO_CART:
            console.warn('RemoveToCart Called', action);
            const updateCartRemove = state.filter(item => item.id !== action.data)
            localStorage.setItem('cart',JSON.stringify(updateCartRemove))
            return updateCartRemove

        case EMPTY_CART:
            console.warn('EmptyCart Called', action);
        localStorage.removeItem('item')
            return []

        default: return state
    }
}

export default Reducer