import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <section className='bg-purple-200 p-2'>
        <div className="container mx-auto px-5">
        <nav>
          
            <ul className='flex justify-center space-x-24 text-center items-center underline font-semibold '>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">shop</Link></li>
                <li><Link to="/whishlist">whishlist</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
        </div>
        </section>
    </div>
  )
}

export default Navbar