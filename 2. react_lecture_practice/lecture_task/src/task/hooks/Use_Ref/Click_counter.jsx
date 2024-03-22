import React,{useRef} from 'react'

const Click_counter = () => {
    let ref = useRef(0)

    const handleclick = () => {
        ref.current = ref.current+ 1;
        alert('you clicked me ' + ref.current +  'Times!') 
    }
  return (
    <div>
        <button className='btn' onClick={handleclick}>Click Me</button>
    </div>
  )
}

export default Click_counter