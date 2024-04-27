import React,{useState} from 'react'
// import TodoList from './To_doList';

const To_doApp = () => {

    const [input , setInput] = useState("");

    const [list , setlist] = useState([]);

    const [uid , setuid] = useState("");

    const [update , setupdate] = useState(false);

    function handletask(){
        setlist([...list , input]);
        setInput(' ')
      }

    const handleupdate = ()=>{
        list.splice(uid, 1 , input)
        setInput("")
        setupdate(false)
    }
    const handleDelete = (i)=>{
        const filterList = list.filter((elem)=> elem !== list[i])
        setlist(filterList)
    }
    const handleEdit = (i)=>{
        const filterList = list.filter((elem)=> elem === list[i])
        setInput(filterList[0])
        setuid(i)
        setupdate(true)
    }
  return (
    <>
    <div className='ms-4 '>
     <div className="input-box">
        <input type="text" placeholder='enter task' className='p-2 border border-red-500' value={input} onChange={(e)=> setInput(e.target.value)}/> {update ?  <button className='btn' onClick={handleupdate}>update</button> : <button className='btn' onClick={handletask}>add task</button>}
     </div>

     <div>
        <ul>
            {list.map((item,i)=><li key={i}>{item}
             <button className='btnn ms-2' onClick={()=>handleEdit(i)}>Edit</button>
             <button className='btnn ms-2' onClick={()=>handleDelete(i)}>delete</button>
             </li>)}
        </ul>
     </div>

     </div>
    </>
  )
}

export default To_doApp