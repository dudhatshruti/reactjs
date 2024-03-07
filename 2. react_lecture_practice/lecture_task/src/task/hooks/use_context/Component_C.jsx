import React from 'react'
import { Usercontext } from '../../../App'

const Component_C = () => {
  return (
    <div>
      <Usercontext.Consumer>
        {
          user => {
            return <div>user context value {user}</div>
          }
        }
      </Usercontext.Consumer>
    </div>
  )
}

export default Component_C