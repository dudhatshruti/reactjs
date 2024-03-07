import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Wooden_home from './Pages/Home/Wooden_home'

import Shop from './Pages/Shop/Shop'
import Shop_2 from './Pages/Shop/Shop_2'
import Shop_details from './Pages/Shop/Shop_details'
import Shop_details_2 from './Pages/Shop/Shop_details_2'
import Shop_location from './Pages/Shop/Shop_location'
import Cart from './Pages/Shop/Cart'
import Sign_in from './Pages/Shop/Sign_in'
import Checkout from './Pages/Shop/Checkout'
import Whishlist from './Pages/Shop/Whishlist'
import Product_track from './Pages/Shop/Product_track'

import About from './Pages/Pages/About'
import Error from './Pages/Pages/Error'
import Coming_soon from './Pages/Pages/Coming_soon'

import Blog_details from './Pages/Blog/Blog_details'
import Blog from './Pages/Blog/Blog'

import { Contact } from './Pages/Contact/Contact'



const App = () => {
  return (

    <>
    <BrowserRouter>
    <Routes>

      {/* -----------WOODEN_HOME---------------- */}
      <Route path='/' element={<Wooden_home/>}></Route>

      {/* ---------------SHOP------------------- */}
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/shop_2' element={<Shop_2/>}></Route>
      <Route path='/shop_details' element={<Shop_details/>}></Route>
      <Route path='/shop_details_2' element={<Shop_details_2/>}></Route>
      <Route path='/shop_location' element={<Shop_location/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/sign_in' element={<Sign_in/>}></Route>
      <Route path='/checkout' element={<Checkout/>}></Route>
      <Route path='/whishlist' element={<Whishlist/>}></Route>
      <Route path='/product_track' element={<Product_track/>}></Route>

      {/* -----------------PAGES---------------- */}
      <Route path='/about' element={<About/>}></Route>
      <Route path='/error' element={<Error/>}></Route>
      <Route path='/coming_soon' element={<Coming_soon/>}></Route>

      {/* -----------------BLOG----------------- */}
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/blog_details' element={<Blog_details/>}></Route>

      {/* -----------------CONTACT-------------- */}
      <Route path='/contact' element={<Contact/>}></Route>

    </Routes>
    </BrowserRouter>
    
    </>
  )
}


export default App