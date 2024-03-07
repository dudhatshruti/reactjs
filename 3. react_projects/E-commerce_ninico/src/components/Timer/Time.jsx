import React,{useState,useEffect} from 'react'

const Time = ({duration}) => {
    const [time, setTime] = useState(duration);

    useEffect(()=> {
        setTimeout(()=>{
            setTime(time - 1000)
        },1000)
    }, [time])

    const getFormetedtime = (milliseconds) =>{
        let total_second = parseInt(Math.floor(milliseconds / 1000));
        let total_minuts = parseInt(Math.floor(total_second / 60));
        let total_hours = parseInt(Math.floor(total_minuts / 60));
        let days = parseInt(Math.floor(total_hours / 24));

        let seconds = parseInt(total_second  % 60)
        let minuts = parseInt(total_minuts  % 60)
        let hours = parseInt(total_hours  % 24)

        return `${-days}   ${-hours}  ${-minuts}  ${-seconds} `;

    }
  return (
  <>
    <div className='text-center text-[40px] font-bold'>
    {getFormetedtime(time)}
    <div className='flex justify-between -mt-2'>
    <p className='text-[16px] ms-4 text-[#777] font-semibold'>Days</p>
    <p className='text-[16px] ms-3 text-[#777] font-semibold'>hour</p>
    <p className='text-[16px] ms-2 text-[#777] font-semibold'>Minute</p>
    <p className='text-[16px] text-[#777]  font-semibold'>Second</p>
    </div>
    </div>
  </>
  )
}

export default Time