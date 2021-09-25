import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackMemo = () => {
   
   const [counter, setCounter] = useState(10)

//  const increment = () => setCounter(counter + 1)

   const increment = useCallback(() => setCounter(c => c + 1), [setCounter])

   return (
      <div>
         <h1>useCallback</h1>
         <hr />
         <h3>{ counter }</h3>
         <ShowIncrement increment={ increment }/>
      </div>
   )
}

export default CallbackMemo
