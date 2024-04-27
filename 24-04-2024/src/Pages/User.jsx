import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'

const User = () => {

    const [searchParams , setsearchParams] = useSearchParams()

    const activeUserlist = searchParams.get('filter') === 'active'
     

  return (
    <>
    <div>User1</div>
    <div>User2</div>
    <div>User3</div>
    <Outlet/>

    <div>
        <button onClick={()=> setsearchParams({filter:"active"}) }>active user</button>
        <button onClick={()=> setsearchParams({})}>React User</button>
    </div>
    {
        activeUserlist ? <h1>active user only</h1> : <h1>All user</h1>
    }
    </>
    
  )
}

export default User