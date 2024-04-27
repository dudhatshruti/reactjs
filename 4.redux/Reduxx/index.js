const redux = require('redux');

const createStore = redux.createStore

const combineReducer = redux.combineReducers

const BUY_CAKES = 'BUY_CAKES'
const BUY_CANDY =  'BUY_CANDY'

function buy_cakes() {
    return{
        type:BUY_CAKES,
        info:'first redux action'
    }
}

function buy_candy(){
    return {
        type:BUY_CANDY,
        info:'second redux action'
    }
}

const initialStates = {
    NoOfCakes : 10,
    NoOfCandy : 10
}
// console.log(initialstates);

const reducer = (state = initialStates, action) => {
    switch (action.type) {
        case BUY_CAKES : 
            return{
                ...state,
                NoOfCakes: state.NoOfCakes - 1,
            }
        default: return state;
    }
}

const reducer1 = (state = initialStates, action) => {
    switch (action.type) {
        case BUY_CANDY : 
            if (state.NoOfCandy > 1) {
                return{
                ...state,
                NoOfCandy: state.NoOfCandy - 1,
                }
            }
            else{
                return("empty store")
            }
        default: return state;
    }
}

console.log(initialStates);

const rootReducer = combineReducer({
    NoCake : reducer,
    Candy : reducer1
})

const store = createStore(rootReducer)


store.subscribe(()=> console.log('Updated Store', store.getState()))

store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())
store.dispatch(buy_cakes())


store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())
store.dispatch(buy_candy())







