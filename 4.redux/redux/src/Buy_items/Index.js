import { createStore as _createStore } from 'redux';

const createStore = _createStore

const BUY_CAKES = 'BUY_CAKES'

function buy_cakes() {
    return{
        type:BUY_CAKES,
        info:'first redux action'
    }
}

const initialstates = {
    NoOfCakes : 10
}
console.log(initialstates);

const reducer = (state = initialstates, action) =>{
    switch (action.type) {
        case BUY_CAKES : 
            return{
                ...state,
                NoOfCakes: state.NoOfCakes - 1,
            }
    
        default: return state
    }
}
console.log(initialstates);

const store = createStore(reducer)

store.subscribe(()=> console.log('Updated Store', store.getState()))

store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
