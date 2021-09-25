import React, { useState } from 'react'

const CounterApp = () => {

   const [counter, setCounter] = useState({
      counter1: 1,
      counter2: 2
   });

   const {counter1, counter2} = counter;

   return (
      <div>
         <h1>CounterApp</h1>
         <hr/>
         <p>Counter 1: {counter1}</p>
         <p>Counter 2: {counter2}</p>
         <button 
            className="btn btn-warning"
            onClick={() => setCounter({...counter, counter1: counter1 + 1})}
         >
            Mas 1
         </button>
      </div>
   )
}

export default CounterApp
