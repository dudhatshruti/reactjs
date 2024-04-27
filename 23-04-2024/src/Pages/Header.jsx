import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const result = useSelector((state) => state.Reducer)
  console.warn('redux Header Data', result);

  return (
    <>
      <Link to="/cart">
        <div className='h-24 bg-yellow-500'>
          <span>{result.length}</span>
        </div>
      </Link>
    </>
  )
}

export default Header