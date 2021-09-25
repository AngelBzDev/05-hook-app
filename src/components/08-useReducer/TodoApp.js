import React, { useEffect, useReducer } from 'react'
import todoReducer from './todoReducer'
import { useForm } from '../../hooks/useForm'
import './style.css'
import TodoList from './components/TodoList'

const init = () => {
   return JSON.parse(localStorage.getItem('todos')) || []
}

const TodoApp = () => {
   
   const [todos, dispatch] = useReducer(todoReducer, [], init)
   const [{desc}, handleInputChange, reset] = useForm( {desc:''} )

   useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
   }, [todos])
   
   const handleAddTodo = (e) => {
      e.preventDefault()      
      if(desc.trim().length <= 1){
         return
      }
      const newTodo = {
         id: new Date().getTime(),
         desc,
         done: false
      }
      const action = {
         type: 'add',
         payload: newTodo
      }
      dispatch(action)
      reset()  
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
               <h4>Add</h4>
               <form onSubmit={ handleAddTodo }>
                  <label className="form-label">Description:</label>
                  <input 
                     name="desc" 
                     type="text" 
                     className="form-control" 
                     placeholder="Do something" 
                     onInput={handleInputChange}
                     value={desc}
                     autoComplete="off"
                  />
                  <div className="d-grid">
                     <button 
                        type="submit" 
                        className="btn btn-success btn-block mt-3">
                           Add
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default TodoApp
