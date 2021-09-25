import React, { useEffect, useState } from 'react'

export const Message = () => {

   const [coors, setCoors] = useState({x: 0, y: 0})

   useEffect(() => {
      
      const mouseMove = (e) => {
         setCoors({ x: e.x, y: e.y })
      }
      window.addEventListener('mousemove', mouseMove)
      
      return () => {
         window.removeEventListener('mousemove', mouseMove)
      }

   }, []);

   return (
      <div>
         <h2 className="mt-3">Te kiero</h2>
         <p>x:{coors.x}, y:{coors.y}</p>
      </div>
   )
}
