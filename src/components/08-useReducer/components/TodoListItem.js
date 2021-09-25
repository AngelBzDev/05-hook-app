import React from 'react'

const TodoListItem = ({todo, i, handleDelete, handleToggle}) => {
   return (
      <li key={todo.id} className="list-group-item">
         <p 
            className={`${todo.done && 'complete'}`}
            onClick={ () => handleToggle(todo.id) }
         >
            {i + 1}. {todo.desc}
         </p>
         <button 
            className="btn btn-outline-danger" 
            onClick={() => handleDelete(todo.id)}>
               Delete
         </button>
      </li>
   )
}

export default TodoListItem
