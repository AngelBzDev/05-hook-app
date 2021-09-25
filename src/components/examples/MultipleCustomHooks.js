import React from "react";
import { useCounter } from "../../hooks/useCounter";
import useFetch from "../../hooks/useFetch";

const MultipleCustomHooks = () => {
   const { counter, increment, decrement } = useCounter(1, 30);
   const { loading, data } = useFetch(
      `https://www.breakingbadapi.com/api/quotes/${counter}`
   );
   const { author, quote } = !!data && data[0];

   return (
      <div>
         <h1>Frases de Breaking Bad</h1>
         <hr />
         {loading ? (
            <div className="alert alert-warning">Cargando...</div>
         ) : (
            <div>
               <blockquote className="blockquote">
                  <p className="mb-4">{quote}</p>
                  <footer className="blockquote-footer">{author}</footer>
               </blockquote>
            </div>
         )}

         <button className="btn btn-info me-4" onClick={decrement}>
            Anterior
         </button>
         <button className="btn btn-danger" onClick={increment}>
            Siguiente
         </button>
      </div>
   );
};

export default MultipleCustomHooks;
