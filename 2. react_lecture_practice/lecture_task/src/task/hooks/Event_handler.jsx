import React from 'react'

function handle_event() {
    alert("hello")
}

const Button = () => {
   
  return (
    <>
        <button className='btn' onClick={handle_event}>
            Click me
        </button>
    </>
  )
}
export default Button

export const Passing = () => {
   
    return (
      <>
          <button className='btn' onClick={()=> alert("how are u?")}>
              Click me
          </button>
      </>
    )
  }

//   reading props in event handles

function Alertbtn({message, children}) {
    return(
        <>
            <button className='btn' onClick={()=> alert(message)}>
                {children}
            </button>
        </>
    )
}

export const Toolebar = ()=>{
    return(
        <>
            <Alertbtn message={"playing...."}>
                play movie
            </Alertbtn>
            <Alertbtn message={"uploading...."}>
                upload image
            </Alertbtn>
        </>
    )
}


// task 
// 1. fix an event handler

export  function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black') {
        bodyStyle.backgroundColor = 'white';
      } else {
        bodyStyle.backgroundColor = 'black';
      }
    }
  
    return (
      <button onClick={handleClick} className='btn'>
        Toggle the lights
      </button>
    );
  }
  
// 2. wire up the events




