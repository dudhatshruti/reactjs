import React from 'react'
import Navbar from '../Component/Navbar'
import { useSelector } from 'react-redux'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto px-3 mt-4">
        <div className="grid grid-cols-5 gap-7">
        <div className='bg-white shadow-2xl rounded-lg'>
          <img src="https://ninico-nextjs.vercel.app/assets/img/product/product-1.jpg" alt="" className='p-2 shadow-2xl'/>
          <div className="content p-3">
            <p className='font-medium'>Bradley burgess 2</p>
            <h1 className='font-bold text-red-950'>$22.06</h1>
            <button className='text-sm mr-2 bg-red-800 text-white p-2 rounded-md'>
            <i class="fa-regular fa-heart"></i>
            </button>
            <button className='text-sm bg-red-800 text-white p-2 rounded-md'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-white shadow-2xl rounded-lg'>
          <img src="https://ninico-nextjs.vercel.app/assets/img/product/product-3.jpg" alt="" className='p-2 shadow-2xl'/>
          <div className="content p-3">
            <p className='font-medium'>Allie Sharp</p>
            <h1 className='font-bold text-red-950'>$30.06</h1>
            <button className='text-sm mr-2 bg-red-800 text-white p-2 rounded-md'>
            <i class="fa-regular fa-heart"></i>
            </button>
            <button className='text-sm bg-red-800 text-white p-2 rounded-md'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-white shadow-2xl rounded-lg'>
          <img src="https://ninico-nextjs.vercel.app/assets/img/product/product-5.jpg" alt="" className='p-2 shadow-2xl'/>
          <div className="content p-3">
            <p className='font-medium'>Effie Rios</p>
            <h1 className='font-bold text-red-950'>$35.06</h1>
            <button className='text-sm mr-2 bg-red-800  text-white p-2 rounded-md'>
            <i class="fa-regular fa-heart"></i>
            </button>
            <button className='text-sm bg-red-800 text-white p-2 rounded-md'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-white shadow-2xl rounded-lg'>
          <img src="https://ninico-nextjs.vercel.app/assets/img/product/product-7.jpg" alt="" className='p-2 shadow-2xl'/>
          <div className="content p-3">
            <p className='font-medium'>Carlyon Goodwin</p>
            <h1 className='font-bold text-red-950'>$34.06</h1>
            <button className='text-sm mr-2 bg-red-800 text-white p-2 rounded-md'>
            <i class="fa-regular fa-heart"></i>
            </button>
            <button className='text-sm bg-red-800 text-white p-2 rounded-md'>
              Add to cart
            </button>
          </div>
        </div>
        <div className='bg-white shadow-2xl rounded-lg'>
          <img src="https://ninico-nextjs.vercel.app/assets/img/product/product-13.jpg" alt="" className='p-2 shadow-2xl'/>
          <div className="content p-3">
            <p className='font-medium'>Sally Ray</p>
            <h1 className='font-bold text-red-950'>$100.06</h1>
            <button className='text-sm mr-2 bg-red-800 text-white p-2 rounded-md'>
            <i class="fa-regular fa-heart"></i>
            </button>
            <button className='text-sm bg-red-800 text-white p-2 rounded-md'>
              Add to cart
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Home