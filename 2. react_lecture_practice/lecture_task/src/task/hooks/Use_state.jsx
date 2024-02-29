/* 1..What is the useState Hook?
-------------------------------------
=> useState is React Hook that allows you to add state to a functional component.
=> It returns an array with two values: the current state and a function to update it
=> The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called. 

  const [state, setState] = useState(initialValue);

Here, the initialValue is the value you want to start with, and state is the current state value that can be used in your component. The setState function can be used to update the state, triggering a re-render of your component.  

2. What can useState hold?
---------------------------

=> useState can store any type of value, whereas the state in a class component is limited to being an object. This includes primitive data types like string, number, and Boolean, as well as complex data types such as array, object, and function.
*/
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
  
    const newage = 20;
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

//  input field usestate
export function Inputvalue(){
  const [val, setvalue] = useState();
  const Click = ()=>{
    alert(val);
  }
  const change =e=>{
    setvalue(e.target.value)
  }
  return(
    <>
    <h1>task 1</h1>
      <input value={val} onChange={change} placeholder='search here...' className='border border-slate-400 outline-none ms-4'/>
      <span><button onClick={Click} className='border border-slate-400 ms-3 px-3 '>Submit</button></span>
      <h1>text:{val}</h1>
    </>
  )
}

/* Counter (number) */

export const Counter = () => {

  const [count , setcount] = useState(0)

  function handleclick() {
    setcount(count + 1)
  }

  return(
    <>
    <h1 className='mt-3'>task 2</h1>
      <button onClick={handleclick} className='btn'>click me {count} times</button>
    </>
  )
}

/* checkbox */

export const Checkbox = () =>{
  const [like, setlike] = useState(true)

  function handlechange(e) {
    setlike(e.target.checked)
  }

  return(
    <>
      <h1 className='mt-3'>task 3</h1>
      <label>
        <input type="checkbox" checked= {like} onChange={handlechange}/> i like this
      </label>
      <p>you {like ?  'like' : 'not like'} this.</p>
    </>
  )
}

/* Form  */

export const Form = ()=>{
  const [name, setname] = useState('john')
  const [age, setage] = useState(21)

  function handlechange(e){
    setname(e.target.value)
  }
  function newage(){
    setage(age=>age+1)
    setage(age=>age+1)

  }

  return(
    <>
      <input value={name} onChange={handlechange} className='outline-0 border border-red-400'/>
      <button className='btn' onClick={newage}>increment age</button>
      <p>hello {name} , you are {age} </p>
    </>
  )
}

/* form (object) */

export const Formobject = ()=>{
  const [form, setForm] = useState({
    firstName: 'john',
    lastName: 'doe',
    email: 'john@test.in',
  })

  return(
    <>
    <h1 className='mt-4'></h1>
    <label>First Name:
      <input value={form.firstName}  onChange={e => {
            setForm({
              ...form,
              firstName: e.target.value
            });
          }} />
    </label>

    <label>Last Name:
      <input value={form.lastName}  onChange={e => {
            setForm({
              ...form,
              lastName: e.target.value
            });
          }} />
    </label>

    <label>Email:
      <input value={form.email}  onChange={e => {
            setForm({
              ...form,
              Email: e.target.value
            });
          }} />
    </label>

    <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p>
    </>
  )

}