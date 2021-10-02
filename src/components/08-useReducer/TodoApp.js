import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'
import TodoList from './components/TodoList'
import TodoAdd from './components/TodoAdd'
import './style.css'

const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {
   
   const [todos, dispatch] = useReducer(todoReducer, [], init)
   
   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])
   
   const handleAddTodo = (newTodo) => { 
      dispatch({
         type: 'add',
         payload: newTodo
      })
   }

   const handleDelete = (id) => {
      const action = {
         type: 'delete',
         payload: id
      }
      if(window.confirm('Are you sure?')){
         dispatch(action)
      }
   }

   const handleToggle = (id) => {
      dispatch({
         type: 'toggle',
         payload: id
      })
   }

   return (
      <div>
         <h1>TodoApp ({ todos.length })</h1>
         <hr />
         <div className="row">
            <div className="col-7">
               <ul className="list-group list-group-flush">
                  {
                     <TodoList 
                        todos={todos} 
                        handleDelete={handleDelete} 
                        handleToggle={handleToggle} 
                     />
                  }
               </ul>
            </div>
            <div className="col-5">
               <TodoAdd handleAddTodo={handleAddTodo}/>
            </div>
         </div>
      </div>
   )
}

export default TodoApp
