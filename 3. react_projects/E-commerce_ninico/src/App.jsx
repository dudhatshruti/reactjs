import React from 'react'
import Wooden_home from './Pages/Home/Wooden_home'
import Shop from './Pages/Shop/Shop'
import Product_track from './Pages/Shop/Product_track'
import Whishlist from './Pages/Shop/Whishlist'
import Sign_in from './Pages/Shop/Sign_in'
import Error from './Pages/Pages/Error'
import { Contact } from './Pages/Contact/Contact'
import Blog_details from './Pages/Blog/Blog_details'
import Blog from './Pages/Blog/Blog'
import About from './Pages/Pages/About'


const App = () => {
  return (

    <>

    {/* --------- HOME ------------ */}
    {/* <Wooden_home/> */}

    {/* --------- SHOP------------- */}
    {/* <Shop/> */}
    {/* <Product_track/> */}
    {/* <Whishlist/> */}
    {/* <Sign_in/> */}

    {/* ---------PAGES -------------- */}
    <About/>
    {/* <Error/> */}

    {/* ---------- BLOG ------------- */}
    {/* <Blog/> */}
    {/* <Blog_details/> */}

    {/* ----------- CONTACT ------------- */}
    {/* <Contact/> */}
   
    </>
  )
}


export default App