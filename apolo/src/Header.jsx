import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {

    const result = useSelector((state) => state.Reducer)

    console.log('HeaderData' , result);

  return (
    <div>
      <div className='h-24 bg-yellow-500 flex justify-end items-center px-20'>
        <span></span>
      </div>
    </div>
  )
}

export default Header
