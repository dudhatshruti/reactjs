const redux = require('redux')

const createStore = redux.createStore

const BUY_CAKES = 'BUY_CAKES';

function buy_cake(){
    return{
        type:BUY_CAKES,
        info:'first redux action'
    }
}

const initialState={
    numOfCakes: 10,
}
console.log(initialState);

const reducer = (state = initialState , action) => {
    switch(action.type){
        case BUY_CAKES: return {
            ...state,
            numOfCakes : state.numOfCakes - 1,
        }
        default: return state
    }
}
console.log(initialState)

const store = createStore(reducer)

store.subscribe(() => console.log('Updated State' , store.getState()))

store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_cake())






