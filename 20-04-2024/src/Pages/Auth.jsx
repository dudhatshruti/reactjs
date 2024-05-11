import React from 'react'
import { useState,createContext,useContext } from 'react'

const AuthContext = createContext()

export const AuthProvider = ({children})=>{
    const [user, setuser] = useState('')

    const login = (user)=>{
        setuser(user)
    }

    const logout = () =>{
        setuser(null)
    }

    return(
        <>
        <AuthContext.Provider value={{login,logout,user}}>
            {children}
        </AuthContext.Provider>
        </>
    )
}

export const authUse = () =>{
    return useContext(AuthContext)
}

