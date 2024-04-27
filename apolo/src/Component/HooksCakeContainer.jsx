import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { buyCake } from './Redux/Cake/CakeAction'

const HooksCakeContainer = () => {
    const numOfCakes =   useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    
      return (
        <div>
          <h1 className='link'>Num Of Cakes - {numOfCakes}</h1>
          <button className='btn' onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
      )
}

export default HooksCakeContainer