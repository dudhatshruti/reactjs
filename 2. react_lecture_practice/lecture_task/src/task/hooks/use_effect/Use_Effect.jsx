/*
1. What is React useEffect Hook? 
----------------------------------

=> useEffect hook is part of React’s Hooks API.
=> hook is to let you perform side effects in your functional components.

=> Sometimes, we want to run some code after the DOM has been updated. It can be anything, showing pop-ups, sending API requests, logging users’ information etc. and such functions don’t require cleanup to be performed. They are just hit-once functions and then we forget about them. Such places are the best examples to use the useEffect hook.  

2. Structure of useEffect Hook
------------------------------

useEffect(() => {
 // Side effect logic
 return () => {
 // Cleanup logic
 };
}, [dependency1, dependency2]);


3. Significance of Parameters:
---------------------------------

Effect Function: Holds the code for the side effect, like fetching data or setting up subscriptions.

Dependency Array: Governs when the effect should run, based on changes in specified dependencies.

Cleanup Function: If provided, runs before the next effect or during component unmounting, facilitating cleanup tasks such as unsubscribing.

*/


import React from 'react'
import { useEffect , useState } from 'react'


const Use_Effect = () => {

  let [state , setState] = useState(0)
  let [data , setData] = useState(0)

//   const handleClick = () =>{
//     setState(state+1)
//   }

  const handleClick1 = () =>{
    setState(state+1)
}
    useEffect(()=>{setData(data+1)},[state])

  return (
    <div>
      <span className='btn'>{state}</span>
      <button className='btn' onClick={handleClick1}>click</button>
      <span className='btn'>{data}</span>
    </div>
  )
}

export default Use_Effect