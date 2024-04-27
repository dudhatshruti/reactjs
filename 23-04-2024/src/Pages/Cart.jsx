import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    const cartData = useSelector((state) => state.Reducer)

    console.log("cartData" , cartData);

  return (
    <div>
      {
        cartData.map((item) =>{
            return (
                <>
                    <div key={item.id} className='border-2 border-black w-64 m-2'>
                  <div>
                    <div className='text-center'>
                      <img className='h-64 w-full' src={item.thumbnail} alt="" />
                      <p>{item.title}</p>
                      <span className=''>{item.price}</span>
                    </div>
                  </div>
                  <div className='flex'>
                    <button className='button' onClick={() => dispatch(removeToCart(item.id))}>RemoveToCart</button>
                  </div>
                </div>
                </>
            )
        }
        )
      }
    </div>
  )
}

export default Cart
