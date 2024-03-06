import React from 'react'
import Component_B from './Component_B'

const Component_A = ({name}) => {
  return (
    <div>
        <h1>this is context hook component A{name}</h1>
        <Component_B/>
    </div>
  )
}

export default Component_A