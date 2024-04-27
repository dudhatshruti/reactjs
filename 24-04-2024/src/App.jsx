import './App.css'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import Contact from './Pages/Contact'
import ProductMain from './Pages/ProductMain'
import Header from './Pages/Header'
import Cart from './Pages/Cart'
import FeatureProduct from './Pages/FeatureProduct'
import NewProduct from './Pages/NewProduct'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/aboutus" element={<AboutUs/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/shop" element={<ProductMain />}>
              <Route path="featureproduct" element={<FeatureProduct/>}></Route>
              <Route path='newproduct' element={<NewProduct/>}></Route>
            </Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
