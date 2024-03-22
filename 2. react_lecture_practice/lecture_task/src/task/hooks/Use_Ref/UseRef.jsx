import React,{useState,useRef} from 'react'

const UseRef = () => {

    // const [name, setname] = ("shruti")

    const RefElement = useRef(0);
    const divElements = useRef()

    function ChangeStyle() {
        RefElement.current.style.color = "red"
    }

    function divStyle(){
        divElements.current.style.backgroundColor = "green"
        divElements.current.style.color = "white"
    }
  return (
    <div>
        <h1 ref={RefElement} className='font-bold'>this is Use_Ref hook</h1>
        <button className='btn' onClick={ChangeStyle}>Click</button>

        <div ref={divElements} className='h-96 w-96 border-2 border-solid border-black mt-6 '>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore quod voluptate quaerat ducimus veritatis est tempora fugiat neque eaque. Similique repellendus, asperiores distinctio assumenda consequatur laudantium at non voluptatum adipisci.
        </div>
        <button onClick={divStyle} className='btn mt-2'>div style</button>

    </div>
  )
}

export default UseRef