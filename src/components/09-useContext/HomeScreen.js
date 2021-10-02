import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'

const HomeScreen = () => {

   const {user} = useContext(UserContext)

   return (
      <div className="container">
         <h1>Home</h1>
         <hr/>
         <pre>
            { JSON.stringify(user, null, 3) }
         </pre>
      </div>
   )
}

export default HomeScreen
