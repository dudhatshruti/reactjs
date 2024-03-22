// syntax:-

// const cachedFn = useCallback(fn, dependencies);

// import React from 'react'
import { useState , useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

const Use_callback = () => {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(25000)

   const incrementAge = useCallback(()=>{
      setAge( age + 1 )
    },[age]);

    const incrementSalary = useCallback(()=>{
      setSalary( salary + 1000 )
    },[salary])

  return (
    <div>
      <Title/>
      <Count text="Age" count={age}/>
      <Button handleclick={incrementAge}>incrementAge</Button>
      <Count  text="salary" count={salary}/>
      <Button handleclick={incrementSalary}>incrementSalary</Button>
    </div>
  )
}

export default Use_callback