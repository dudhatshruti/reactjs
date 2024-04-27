import './App.css'
import {addToCart , RemoveToCart ,  Increment , Decrement } from './components/redux/Action'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch()

  const product = {
    name:"appleTv",
    color:"Matteblue",
    price:500000,
    size : "80 x 80"
  }

  /* Function Call({} , argument) , apply([]) And Bind({}) Method */


  return (
    <>
      <div>
        <button className='button' onClick={() => dispatch(addToCart(product))}>AddCart</button>
        <button className='button' onClick={() => dispatch(RemoveToCart(product))}>RemoveProduct</button>
        <button className='button' onClick={() => dispatch(Increment(product))}>Increment</button>
        <button className='button' onClick={() => dispatch(Decrement(product))}>Decrement</button>
      </div>
    </>
  )
}

export default App
