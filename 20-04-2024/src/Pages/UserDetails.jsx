import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const {params} = useParams()
  return (
    <div>
        <h1>user{params}</h1>
    </div>
  )
}

export default UserDetails