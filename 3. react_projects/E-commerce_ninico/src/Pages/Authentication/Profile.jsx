import React from 'react'
import { authUse } from './Auth'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const auth = authUse()
    const navigate = useNavigate()

    const handleclick = () =>{
        auth.logout()
        navigate('/')
    }
  return (
    <div className='mt-3'>
        <span>Welcome to ninicos mr/msr {auth.user}</span>
        <button className="button" onClick={handleclick}>logout</button>
    </div>
  )
}

export default Profile