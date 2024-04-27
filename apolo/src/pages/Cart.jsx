import React from 'react'
import Navbar from '../Component/Navbar'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
      <Navbar/>
      <div className='text-center'>
       <p>this is Cart page</p>
       <Link to="/"><button className='btn mt-10'>Go to Home</button></Link>
      </div>
    </div>
  )
}

export default Cart