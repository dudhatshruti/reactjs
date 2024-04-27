import './App.css'
import ProductMain from './Pages/ProductMain'
import Header from './Pages/Header'
import Cart from './Pages/Cart'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<ProductMain />}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
