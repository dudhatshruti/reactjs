import { ADD_TO_CART,REMOVE_TO_CART, EMPTY_CART } from "./Constant";

const Reducer = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            console.warn("AddToCart called",action);
            return [action.data, ...data]

        case REMOVE_TO_CART:
            console.warn("RemoveToCart called",action);
            data.length = data.length - 1
            console.log([...data]);
            return [...data]

        case EMPTY_CART:
            console.warn("emptyCart",action);   
            return data = []  
         
        default: return data
    }
}

export default Reducer