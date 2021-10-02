import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

   const { setUser } = useContext(UserContext)

   const newUser = {
      id: Date.now(),
      name: 'Angelo7'
   }

   return (
      <div className="container">
         <h1>Login</h1>
         <hr/>
         <button
            className="btn btn-danger"
            onClick={ () => setUser({newUser}) }
         >Login</button>
      </div>
   )
}

export default LoginScreen
