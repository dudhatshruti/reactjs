import { useReducer } from 'react';

/* Multiple Reducer */

const initialState = {
  firstCounter : 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {firstCounter: state.firstCounter + 1 }
    case 'decrement':
      return {firstCounter: state.firstCounter - 1 }
    case 'reset':
      return initialState
    default:
      return state
  }
}
 
const Reducer_Multiple_4 = () => {

  const [count, dispatch] = useReducer(reducer, initialState)
  const [countTWO, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
      <div className='btn'>{count.firstCounter}</div>
      <button className="btn" onClick={() => dispatch({type : 'increment'})}>Increment</button>
      <button className='btn' onClick={() => dispatch({type : 'decrement'})}>Decrement</button>
      <button className='btn' onClick={() => dispatch({type : 'reset'})}>Reset</button>
      <div>
        
      <div className='btn'>{countTWO.firstCounter}</div>
      <button className="btn" onClick={() => dispatchTwo({type : 'increment'})}>Increment</button>
      <button className='btn' onClick={() => dispatchTwo({type : 'decrement'})}>Decrement</button>
      <button className='btn' onClick={() => dispatchTwo({type : 'reset'})}>Reset</button>
      </div>
    </div>
  )
}

export default Reducer_Multiple_4