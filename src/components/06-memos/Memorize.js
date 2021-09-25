import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {
   const { counter, increment } = useCounter(10);
   const [show, setShow] = useState(true);
   return (
      <div>
         <h1>Memorize</h1>
         <hr />
         <Small value={counter} />
         <button className="btn btn-danger" onClick={increment}>
            Mas 1
         </button><br/>
         <button className="btn btn-warning mt-3" onClick={() => setShow(!show)}>
            Show/Hiden {JSON.stringify(show)}
         </button>
      </div>
   );
};

export default Memorize;
