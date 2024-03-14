import React ,  { useContext } from 'react'
import {Object1} from '../../../App'
import{ Object2 }from '../../../App'
import Child_D from './Child_D'
const Child_C = () => {
    // const data1 = useContext(Object1)
    // const data2 = useContext(Object2)
  
    return (
      <div>
        {/* Hi , {data1} Is Located In {data2} */}
        <Child_D/>
      </div>
    )
}

export default Child_C