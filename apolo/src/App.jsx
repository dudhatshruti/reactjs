import './App.css'
// import { BrowserRouter , Routes, Route } from 'react-router-dom'
// import Home from './pages/Home'
// import Shop from './pages/Shop'
// import Whishlist from './pages/Whishlist'
// import Cart from './pages/Cart'
import { AddToCart,RemoveToCart, Empty_Cart } from './Cart_Redux/Action'
import { useDispatch } from 'react-redux'
import Header from './Header'
function App() {

  const dispatch = useDispatch()

  const product = {
    name : "AppleTv",
    color: "black",
    price: 400000,
    size : "80 x 80"
  }

  return (
    <>
    {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/whishlist' element={<Whishlist/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    </BrowserRouter> */}
    <Header/>

    <button className='btn' onClick={()=> dispatch(AddToCart(product))}>AddToCart</button>
    <button className='btn' onClick={()=> dispatch(RemoveToCart(product))}>RemoveToCart</button>
    <button className='btn'onClick={()=> dispatch(Empty_Cart())}>EmptyCart</button>
  
    </>
  )
}

export default App
