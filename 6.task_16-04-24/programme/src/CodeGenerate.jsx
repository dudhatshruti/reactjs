import React from 'react'
import QRCODE from 'qrcode.react'
const CodeGenerate = () => {
  return (
    <div className='text-center'>
        <h1 className='underline mb-6'>QR code generate</h1>
        <input type="text" placeholder='e.g. https://google.com' className='outline-0 border-purple-500 border p-1' />
        <button className='border  p-1 ms-2 bg-purple-500 text-white '>generate</button>
        <img src={QRCODE} alt=""/>
    </div>
  )
}

export default CodeGenerate