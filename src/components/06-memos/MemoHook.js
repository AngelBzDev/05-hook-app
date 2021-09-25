import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { process } from '../../helpers/process'

const MemoHook = () => {
   const { counter, increment } = useCounter(100);
   const [show, setShow] = useState(true);
   const memoProcess = useMemo(() => process(counter), [ counter ])

   return (
      <div>
         <h1>MemoHook</h1>
         <hr />
         <h3>Counter: { counter }</h3>
         <p>{ memoProcess }</p>
         <button className="btn btn-danger" onClick={increment}>
            Mas 1
         </button><br/>
         <button className="btn btn-warning mt-3" onClick={() => setShow(!show)}>
            Show/Hiden {JSON.stringify(show)}
         </button>
      </div>
   );
};

export default MemoHook;