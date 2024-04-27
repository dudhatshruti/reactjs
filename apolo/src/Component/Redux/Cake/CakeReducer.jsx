import { BUY_CAKE } from "./CakeTypes"

const initialState = {
     numOfCakes: 10,
}

export const CakeReducer = (state = initialState , action) => {
     switch(action.type){
          case BUY_CAKE:
               
               return (state.numOfCakes >=1) ? {numOfCakes:state.numOfCakes - 1 } : alert("item is not available");

          default: return state
     }
}