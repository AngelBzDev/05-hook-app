import React from 'react'
import { useForm } from '../../../hooks/useForm'

const TodoAdd = ({ handleAddTodo }) => {

   const [{desc}, handleInputChange, reset] = useForm( {desc:''} )

   const handleSubmit = (e) => {
      e.preventDefault()      
      if(desc.trim().length <= 1){
         return
      }
      const newTodo = {
         id: new Date().getTime(),
         desc,
         done: false
      }
      
      handleAddTodo(newTodo)
      
      reset()  
   }

   return (
      <>
         <h4>Add</h4>
         <form onSubmit={ handleSubmit }>
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
      </>
   )
}

export default TodoAdd
