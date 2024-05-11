import React from 'react'
import { authUse } from './Auth'
import { Navigate } from 'react-router-dom'


const RequireAuth = ({children}) => {

    const auth = authUse()

    if (!auth.user) {
        return <Navigate path="/sign_in"/>
    }
  return (
    <div>
        {children}
    </div>
  )
}

export default RequireAuth