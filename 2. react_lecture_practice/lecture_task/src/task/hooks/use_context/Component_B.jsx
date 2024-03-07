import React from 'react'
import { Usercontext } from '../../../App'
// import Component_C from './Component_C'

const Component_B = () => {
  return (
    <div>
      <Usercontext.Consumer>
        {
          user =>{
            <div>user context value {user}</div>
          }
        }
      </Usercontext.Consumer>
        {/*   <Component_C/>  */}
     </div>
  )
}

export default Component_B