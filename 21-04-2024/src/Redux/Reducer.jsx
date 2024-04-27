import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./Types"


const Reducer = (data = [], action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.warn('AddToCart Called', action);
            return [action.data , ...data]

        case REMOVE_TO_CART:
            console.warn('RemoveToCart Called', action);
            data.length =data.length ?  data.length-1 : []
            return [...data]

        case EMPTY_CART:
            console.warn('EmptyCart Called', action);
            data = []
            return [...data]

        default: return []
    }
}

export default Reducer