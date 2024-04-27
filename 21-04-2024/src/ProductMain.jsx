import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { productList } from './Redux/ProductRedux/ProductAction'
import { addToCart, removeToCart } from './Redux/Action'

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
        {/* <button className='button' onClick={() => dispatch(addToCart(product))}>Add To Cart</button>
        <button className='button' onClick={() => dispatch(removeToCart(product.name))}>Remove From Cart</button> */}
        {/* <button className='button' onClick={() => dispatch(emptyCart())}>Empty Cart</button> */}
        {/* <button className='button' onClick={() => dispatch(productList())}>Product List</button> */}
        <div>
          {
            data.map((item) => {
              return (
                <>
                  <div key={item.id}>
                    <div>{item.name}</div>
                  </div>
                  <div className='flex'>
                    <button className='button' onClick={() => dispatch(addToCart(item))}>Add To Cart</button>
                    <button className='button' onClick={() => dispatch(removeToCart(item.id))}>Remove From Cart</button>
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