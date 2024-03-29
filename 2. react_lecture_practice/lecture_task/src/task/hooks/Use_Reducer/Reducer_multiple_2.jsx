import { useReducer } from 'react';

/* convert string action to object */

const initialState = {
  firstCounter : 0,
  
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return {firstCounter: state.firstCounter - action.value }
    case 'reset':
      return initialState
    default:
      return state
  }
}
 
const Reducer_Multiple_2 = () => {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <div className='btn'>{count.firstCounter}</div>
      <button className="btn" onClick={() => dispatch({type : 'increment', value : 1})}>Increment</button>
      <button className='btn' onClick={() => dispatch({type : 'decrement' , value : 1})}>Decrement</button>
      <button className="btn" onClick={() => dispatch({type : 'increment' , value : 5})}>Increment 5</button>
      <button className='btn' onClick={() => dispatch({type : 'decrement' , value : 5})}>Decrement 5</button>
      <button className='btn' onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default Reducer_Multiple_2