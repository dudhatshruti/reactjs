
import React from 'react'
import { useState} from 'react'

const To_do = () => {

  const [item, setItem] = useState("");
  const [listValue, setListValue] = useState([]);

  /* unique Key */
  

  function addItems(){
    setListValue([...listValue , item]);
    console.log(listValue);
    // setListValue((listValue)=> {
    //   const upadatedList = [...listValue , item];
    //   console.log(upadatedList);
      setItem('');
    //   return upadatedList
      
    // });
  }

  function removeItem(i){
    const updatedListData = listValue.filter((elem , id) => {
      return i!=id;
    })
    setListValue(updatedListData);
  }

  return (
    <div className='container bg-slate-500 mx-auto p-10'>
      <div className=''>
        <h1 className='text-center text-2xl font-black underline'>TO-DO LIST</h1>
        <div className='flex justify-center'>
        <div className='my-10 border-solid border-black border-2 w-fit'>
          <input className='p-2 focus:outline-none' type="text" placeholder='Add Items' value={item} onChange={(e) =>setItem(e.target.value)} />
          <button className='bg-purple-700 p-2' onClick={addItems}>Add Item</button>
        </div>
        </div>
          <p className='border-solid border-black border-2 text-black mt-4 bg-purple-500 p-1'>
            Here Is List Items
          </p>
          {
            listValue!=[] && listValue.map((data , i) => {
              return(
              <>
                <p key={i}>
                  <div className='flex mt-4'>
                  <div className='btn'>{data}</div>
                  <button className='btn' onClick={() => removeItem(i)}>Remove</button>
                  </div>
                </p>
              </>
            )})
          }
      </div>
    </div>
  )
}

export default To_do
