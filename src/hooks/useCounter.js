import { useState } from "react"

export const useCounter = (initialState = 1, limit = 50) => {
   
   const [counter, setCounter] = useState(initialState)

   const increment = () => {
     return counter !== limit ? setCounter(counter + 1) : setCounter(initialState)
   }

   const decrement = () => {
      return counter > 1 && setCounter(counter - 1)
   }

   const reset = () => setCounter(initialState);

   return {
      counter, increment, decrement, reset
   }

}
