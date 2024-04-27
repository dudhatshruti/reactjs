import { useReducer , useState } from "react";

  const InitialState = [];
  

  
  
  function reducer(state, action) {
  switch (action.type) {
    case "change_todo":return [{
      // draft:"",
      draft: action.nextDraft,
      todos: state.todos,
  }]
    case "add_todo": return[
      ...state, 
      {
        id: state.length +1,

        name:action.nextDraft
      }
    ]
    case "remove_todo": return state.filter((item)=> item.id !== action.nextDraft)

    case 'Edit_todo': return [
      ...state,
      {
        name: action.nextDraft
      }
    ]

    default : return state  
  }
}

export default function TodoList() {

  const [todo, dispatch] = useReducer(reducer, InitialState);
  return (
    <>
    <div className="text-center">
      <h4>Todo List {todo.length}</h4>
      <input className="p-2 border-2 border-red-500"
        onBlur={(e) => {
          dispatch({
            type: "add_todo",
            nextDraft: e.target.value,
          });
        }}
      />
        <button onClick={() => {
        dispatch({ type: 'added_todo' });
      }}>Add</button>

      {todo.map(todo=><li key={todo.id}>
        {todo.name}
        <span>
          <button className="btnn" onClick={()=> dispatch({type:'remove_todo',nextDraft:todo.id})}>Delete</button>
        </span>
        <span>
          <button className="btnn ms-2" onClick={(e)=> dispatch({type:'Edit_todo'})}>Edit</button>
        </span>
        </li>)}
      </div>
    </>
  );
}
