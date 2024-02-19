import React from 'react';
import '../welcome/top_welcome.css'

const Top_welcome = () => {
  return (
  <>
  <div className='bg-[#e7e7e7]'>
    <div className="container mx-auto px-2 py-1 ">
    <div className="row ">
      <div className=" cols-12 sm:text-start items-center">
        <span className="welcome font-bold text-xs line">
          Welcome to our international shop! Enjoy free shipping on orders
          $100 up.
        </span>
          <span className="header-welcome-text space-x-3  relative font-semibold text-xs text-[#d51243]">
          <a href="/shop" className="font-bold font-serif ">
            Shop Now
          </a>
          <span><i class="fa-solid fa-arrow-right transition hover:translate-x-1  hover:ease-in-out "></i></span>
        </span>
      </div>
    </div>
  </div>
  </div>
  </>
  )
}

export default Top_welcome