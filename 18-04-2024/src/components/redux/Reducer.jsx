import { ADD_TO_CART , REMOVE_TO_CART , INCREMENT , DECREMENT } from "./constant"

// const initialState = {
//     cart : 10
// }

const Reducer = (data = 0 , action) => {
    switch(action.type){
        case ADD_TO_CART:
            console.warn('AddToCart Called' , action);
            return action
        
        case REMOVE_TO_CART:
            console.warn('RemoveToCart Called' , action);
            return action

        case INCREMENT:
            console.warn('Increment Called' , action);
            return 1 + 1
        
        case DECREMENT:
            console.warn('Decrement Called' , action);
            return 1 - 1
        
        default:'Reducer not called'
    }
    return 'Reducer not called'
}

export default Reducer