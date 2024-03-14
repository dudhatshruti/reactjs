
import { useReducer } from 'react';

function createInitialState(username) {
  const initialTodos = [];
  for (let i = 0; i < 10; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1)
    });
  }
  return {
    draft: '',
    todos: initialTodos,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case 'changed_draft': {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    };
    case 'added_todo': {
      return {
        draft: '',
        todos: [{
          id: state.todos.length,
          text: state.draft
        }, ...state.todos]
      }
    }
    case 'Remove_item':{
      return {
        draft:action.id,
        todos:[state.todos.filter((item)=> item.id !== action)]
      }
    }
  }
  throw Error('Unknown action: ' + action.type);
}



export default function TodoList({ username }) {
  const [state, dispatch] = useReducer(
    reducer,
    createInitialState(username)
  ); 

  // function handleremove(id){
  //   dispatch({type:'Remove_item',id})
  //    return newlist
  //   const newlist = state.todos.filter((item)=>item.id !== id)
  //   dispatch({
  //     type:'Remove_item', id
  //   })
  //   console.log(id);
  // }

  return (
    <>
      <input className='border border-black p-2'
        value={state.draft}
        onChange={e => {
          dispatch({
            type: 'changed_draft',
            nextDraft: e.target.value
          })
        }}
      />
      <button className='btn' onClick={() =>{
        dispatch({ type: 'added_todo'});
      }}>Add</button>
      <ul>
        {state.todos.map(item => (
          <div>
            <li key={item.id}>
            <p>{item.text}
            <span>
            <button className='btnn ms-20 mt-4' type="button" onClick={()=>{dispatch({type: 'Remove_item'})}}>
            Remove
          </button>
            </span>
            </p>
            </li>
          </div>
        ))}
      </ul>
    </>
  );
}
