import React,{useContext} from 'react'

import { Object4 } from '../../../App'
import Child_G from './Child_G'

const Child_F = () => {
    
    // const data3= useContext(Object4)

  return (
    <div>
        {/* {data1}
        {data2} */}
        {/* {data3[2].name}
        {data3[2].color}
        {data3[2].price} */}

        <Child_G/>

    </div>
  )
}

export default Child_F