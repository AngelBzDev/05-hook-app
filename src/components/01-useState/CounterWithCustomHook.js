import React from 'react'
import { useCounter } from '../../hooks/useCounter'

const CounterWithCustomHook = () => {

   const {state, increment, decrement, reset} = useCounter();

   return (
      <div>
         <h1>Counter With Custom Hooks</h1>
         <h4>{ state }</h4>
         <hr />
         <button className="btn btn-warning me-4" onClick={() => increment(3)} > + </button>
         <button className="btn btn-info me-4" onClick={reset}>Reset</button>
         <button className="btn btn-danger" onClick={() => decrement(3)} > - </button>
      </div>
   )
}

export default CounterWithCustomHook
