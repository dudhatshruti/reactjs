import { ADD_TO_CART , REMOVE_TO_CART , EMPTY_CART } from "./constant"

// const initialState = {
//     cart : 10
// }

const Reducer = (data = [] , action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.warn('AddToCart Called' , action);

            return [action.data , ...data]
        
        case REMOVE_TO_CART:
            console.warn('RemoveToCart Called' , action);

            data.length = data.length - 1 
            // data.length = data.length ? data.length - 1 : [] 
            return [ ...data]

        case EMPTY_CART:
            console.warn('Increment Called' , action);
            return data = []
        
        default: return data
    }
    return 'Reducer not called'
}

export default Reducer