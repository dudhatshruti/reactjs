import axios from 'axios'
import React, { useState } from 'react'

const AxiosPost = () => {

    const data = {fname:" " , lname:" "}
    const [inputData , setinputData] = useState(data)

    const handleData = (e)=>{
        setinputData({...inputData,[e.target.name]: e.target.value})
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts',inputData)
        .then((res)=>{
            console.log(res);
        })
    }

    const handleUpdate = (e)=>{
        e.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/posts',inputData)
        .then((res)=>{
            console.log(res);
        })
    }
    const handleDelete = (e)=>{
        e.preventDefault()
        axios.delete('https://jsonplaceholder.typicode.com/posts',inputData)
        .then((res)=>{
            console.log(res);
        })
    }

  return (
    <div>
        <label>First Name:</label>
        <input className='outline-0 border-2 border-black' type="text" name='fname' value={inputData.fname} onChange={handleData} />

        
        <label>Last Name:</label>
        <input className='outline-0 border-2 border-black' type="text" name='lname' value={inputData.lname} onChange={handleData} />
        <button className='btn' onClick={handleSubmit}>submit</button>
        <button className='btn' onClick={handleUpdate}>update data</button>
        <button className='btn' onClick={handleDelete}>Delete Data</button>

    </div>
  )
}

export default AxiosPost