import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from '../Redux/ProductRedux/ProductAction'
import { addToCart, removeToCart } from '../Redux/Action'

const ProductMain = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.ProductReducer)

  console.warn('productMain', data);

  useEffect(() => {
    dispatch(productList())
  }, [])

  return (
    <>
      <div> 
        <div className='flex flex-wrap p-4'>
          {
            data.flat().map((item) => {
              return (
                <>
                <div key={item.id} className='border-2 border-black w-64 m-2'>
                  <div >
                    <div className='text-center'>
                      <img className='h-64 w-full' src={item.thumbnail} alt="" />
                      <p>{item.title}</p>
                      <span className=''>{item.price}</span>
                    </div>
                  </div>
                  <div className='flex'>
                    <button className='button' onClick={() => dispatch(addToCart(item))}>AddToCart</button>
                    <button className='button' onClick={() => dispatch(removeToCart(item.id))}>RemoveToCart</button>
                  </div>
                </div>
                </>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default ProductMain