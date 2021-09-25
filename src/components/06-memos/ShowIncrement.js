import React from 'react'

const ShowIncrement = React.memo(({increment}) => {
   console.log('soy yo de nuevo')
   return (
      <div>
         <button className="btn btn-primary" onClick={ () => increment() }>
            Increment
         </button>
      </div>
   )
})

export default ShowIncrement
