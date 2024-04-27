import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const result = useSelector((state) => state.Reducer)
  console.warn('redux Header Data', result);

  const navLinks = ({isActive}) => {
    return{
      color:isActive ? "red" : "black",
      fontWeight:isActive ? "bold" : "normal"
    }
  }

  return (
    <>
      <nav className='bg-yellow-500 flex justify-between px-4 items-center p-4 border-2 border-solid border-black'>
        <div className='w-28'>
          <NavLink><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsGJx2G9wkzu-hqzwk0c4TLb20IWeakPNxFqZVB4RweA&s" alt="" /></NavLink>
        </div>
        <ul className='flex space-x-28 items-center'>
          <li><NavLink style={navLinks} to='/'>Home</NavLink></li>
          <li><NavLink style={navLinks} to='/aboutus'>AboutUs</NavLink></li>
          <li><NavLink style={navLinks} to='/contact'>Contact</NavLink></li>
          <li><NavLink style={navLinks} to='/shop'>Shop</NavLink></li>
          <li><NavLink style={navLinks} to="/cart"><div ><span>Cart: {result.length}</span></div></NavLink></li>
        </ul>
      </nav>
    </>
  )
}

export default Header