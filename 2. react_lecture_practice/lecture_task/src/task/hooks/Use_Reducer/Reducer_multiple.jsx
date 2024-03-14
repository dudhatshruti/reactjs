import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0
}

const reducer = (state, action)=>{
    switch (action.type) {
        case 'increment':
            return {firstCounter: state.firstCounter + 1}
        case 'decrement':
            return {firstCounter: state.firstCounter - 1}
        case 'reset':
            return initialState
        default: state
    }
}

const Reducer_multiple = () => {

  const [count , dispatch] =  useReducer(reducer, initialState)
  return (
    <div>
    <div className='btn'>{count.firstCounter}</div>
    <button className="btn mt-3" onClick={() => dispatch({type:'increment'})}>Increment</button>
    <button className='btn' onClick={() => dispatch({type:'decrement'})}>Decrement</button>
    <button className='btn' onClick={() => dispatch({type:'reset'})}>Reset</button>
  </div>
  )
}

export default Reducer_multiple