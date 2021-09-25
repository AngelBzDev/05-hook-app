import React, { useRef } from "react";

const FocusScreen = () => {
   const ref = useRef();

   const handleClick = () => {
      ref.current.select();
   };

   return (
      <div>
         <h1>Focus Screen</h1>
         <hr />
         <input
            className="form-control my-3"
            type="text"
            placeholder="What is your name?"
            ref={ref}
            autoFocus
         />
         <button onClick={handleClick} className="btn btn-success">
            Focus
         </button>
      </div>
   );
};

export default FocusScreen;
