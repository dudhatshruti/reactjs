import React from 'react'
import axios from 'axios'

const AxiosGet = () => {

    const fetchapi = async()=>{
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            console.log(response);  
        })
    }

  return (
    <div>
        <button className='btn' onClick={fetchapi()}>CLICK</button>
    </div>
  )
}

export default AxiosGet