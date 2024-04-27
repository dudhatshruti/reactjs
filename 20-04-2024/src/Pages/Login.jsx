import React from 'react'
import { useState } from 'react'
import { authUse } from './Auth'
import { useNavigate } from 'react-router-dom'
const Login = () => {

    const [user,setuser] = useState('')

    const auth = authUse()
    const navigate = useNavigate()

    const handleLogin = () => {
        auth.login(user)
        navigate('/profile')
    }
  return (
    <div>
        <div className='mt-3'>
        userName : {' '}
        <input type="text" className="border outline-none border-black" onChange={(e)=> setuser(e.target.value) } />
        <button className='button' onClick={handleLogin}>Profile Login</button>
        </div>
    </div>
  )
}

export default Login