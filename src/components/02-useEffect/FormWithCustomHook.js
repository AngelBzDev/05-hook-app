import React from 'react'
import { useForm } from '../../hooks/useForm';

const FormWithCustomHook = () => {

   const {values, handleInputChange} = useForm({
      name: '',
      email: '',
      password: ''
   }); 

   const {name, email, password} = values;

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(values)
   }

   return (
      <div>
         <h1>FormWithCustomHook</h1>
         <hr/>
         <form onSubmit={handleSubmit}>
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
            <div className="mb-3">
               <input 
                  type="password" 
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  autoComplete="off"
                  value={ password }
                  onChange={ handleInputChange }
               />
            </div>
            <button type="submit" className="btn btn-danger">Submit</button>
         </form>
      </div>
   )
}

export default FormWithCustomHook