import './App.css'
import {addToCart , RemoveToCart , EmptyCart} from './components/redux/Action'
import { useDispatch } from 'react-redux'
import Header from './Header'

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
        <Header/>
        <button className='button' onClick={() => dispatch(addToCart(product))}>AddCart</button>
        <button className='button' onClick={() => dispatch(RemoveToCart(product))}>RemoveProduct</button>
        <button className='button' onClick={() => dispatch(EmptyCart(product))}>Empty Cart</button>
      </div>
    </>
  )
}

export default App
