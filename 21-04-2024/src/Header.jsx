import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const result = useSelector((state) => state.Reducer)
    console.warn('redux Header Data', result.length);

  return (
    <div className='h-24 bg-yellow-500'>
        <span>{result.length}</span>
    </div>
  )
}

export default Header