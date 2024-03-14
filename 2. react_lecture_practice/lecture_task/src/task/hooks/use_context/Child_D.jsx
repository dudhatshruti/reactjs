import React,{useContext} from 'react'
import {Object1} from '../../../App'
import{ Object2 }from '../../../App'
// import { Object4 } from '../../../App'
import Child_E from './Child_E'

const Child_D = () => {
    // const data1 = useContext(Object1)
    // const data2 = useContext(Object2)
    // const data3= useContext(Object4)

  return (
    <div>
        {/* {data1}
        {data2} */}
        {/* {data3[0].name}
        {data3[0].color}
        {data3[0].price} */}
        <Child_E/>
    </div>
  )
}

export default Child_D