import React, { useState } from 'react'
import { Message } from './Message';

const SimpleForm = () => {

   const [formState, setFormState] = useState({
      name: '',
      email: ''
   });

   const {name, email} = formState;

   /* useEffect(() => {
   }, [formState]); */

   const handleInputChange = (e) => {
      setFormState({
         ...formState,
         [e.target.name]: e.target.value
      })
   }

   return (
      <div>
         <h1>useEffect</h1>
         <hr/>
         <form>
            <div className="mb-3">
               <input 
                  type="text" 
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  autoComplete="off"
                  value={ name }
                  onChange={ handleInputChange }
               />
            </div>
            <div className="mb-3">
               <input 
                  type="email" 
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  value={ email }
                  onChange={ handleInputChange }
               />
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
         </form>

         {name === 'Angelo' && <Message />}

      </div>
   )
}

export default SimpleForm
