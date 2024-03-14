/* use_reducer
--------------------
SYNTAx :- const [state, dispatch] = useReducer(reducer, initialArg, init?)

reducer: -> Reducers are the  pure functions that take in a state and action and return a new state

*/

import React ,{ useReducer} from 'react'

const initialState = 0;

const reducer = (state , action) => {
    console.log(state, action);

     if(action.type === "INCREMENT"){
          return state + 1
     }
     if(action.type === "DECREMENT"){
          return state - 1
     }
     return state
}


const Use_Reducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState) 

    const Increment=()=>{
        dispatch({type : "INCREMENT"})
    }

    const Decrement=()=>{
        dispatch({type : "DECREMENT"})
    }
  return (
    <div className='flex'>
        <p className='btn'>{state}</p>
        <button className='btn' onClick={Increment}>+</button>
        <button className='btn' onClick={Decrement}>-</button>
    </div>
  )
}

export default Use_Reducer