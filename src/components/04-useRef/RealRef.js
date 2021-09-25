import React, { useState } from "react";
import MultipleCustonHooks from "../examples/MultipleCustomHooks";

const RealRef = () => {
   const [show, setShow] = useState(false);

   return (
      <div>
         <h1>Real Ref</h1>
         <hr />
         {show && <MultipleCustonHooks />}
         <button
            className="btn btn-primary mt-3"
            onClick={() => setShow(!show)}
         >
            Show/Hidden
         </button>
      </div>
   );
};

export default RealRef;
