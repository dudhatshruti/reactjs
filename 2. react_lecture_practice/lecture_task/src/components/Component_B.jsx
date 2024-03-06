import React from 'react'
import Component_C from './Component_C'

const Component_B = ({name}) => {
  return (
    <div>
        <h1>this is context hook component B</h1>
        <Component_C/>
    </div>
  )
}

export default Component_B