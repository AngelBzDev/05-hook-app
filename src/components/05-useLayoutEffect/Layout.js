import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

const Layout = () => {
   const { counter, increment, decrement } = useCounter(1, 30);
   const { data } = useFetch(
      `https://www.breakingbadapi.com/api/quotes/${counter}`
   );
   const { quote } = !!data && data[0];

   const ref = useRef();

   const [pWidth, setPWidth] = useState(0);

   useLayoutEffect(() => {
      setPWidth(ref.current.getBoundingClientRect().width);
   }, [quote]);

   return (
      <div>
         <h1>useLayoutEffect</h1>
         <hr />

         <div>
            <blockquote className="blockquote">
               <p ref={ref} className="mb-4 d-inline">
                  {quote}
               </p>
               <p>Width: {Math.floor(pWidth)}</p>
            </blockquote>
         </div>

         <button className="btn btn-info me-4" onClick={decrement}>
            Anterior
         </button>
         <button className="btn btn-danger" onClick={increment}>
            Siguiente
         </button>
      </div>
   );
};

export default Layout;
