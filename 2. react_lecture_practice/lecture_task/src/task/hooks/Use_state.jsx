import React,{useState} from 'react'

/* ------------------COUNT -------------------*/ 
export const Use_state = () => {
    const [count  , setCount] = useState(0);

    const increment = () =>{
        setCount(count+1)
      }
    
      const decrement =  () =>{
        setCount(count-1)
      }
  return (
    <>
    <span className='btn'>{count}</span>
    <button className='btn' onClick={increment}>Increment</button>
    <button className='btn' onClick={decrement}>Decrement</button>
    </>
  )
}

/*---------------SET NAME  AND SET AGE ------------------- */
export const Use_state2 = () => {
    const [state , setstate] = useState();
    const [age , setAge] = useState();

    const setname = () =>{
        setstate("shruti")
    }
    const setage = () =>{
        setAge(21)
    }
    return(
        <>
        <span className='name'>{state}</span>
        <button className='name' onClick={setname}>Name</button>

        <span className='name'>{age}</span>
        <button className='name' onClick={setage}>age</button>
        </>
    )
}

/*-------------0 to 25 age counter print your name ---- 25 to up counter set another name */
/* name change --photos change  */


export const Age_name_photo = () => {
  const [age, setAge] = useState();
  const [name, setname] = useState();
  const [photo, setphoto] = useState();

  const update_profile = ()=>{
  
    const newage = 27;
    setAge(newage);

    if (newage>=0 && newage<= 25) {
      setname("puja")
      setphoto("https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg")
    }
    else if(newage> 25){
      setname("priya");
      setphoto("https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
    }
  }
  return (
    <div>
      <p className='name' onClick={update_profile}>age:</p>
      <span  className='name'>{age}</span>

      <span>{name}</span>
      <img src={photo} alt="" className='h-52 w-58 mt-6' />

      <button onClick={update_profile}></button>
    </div>
  )
}



