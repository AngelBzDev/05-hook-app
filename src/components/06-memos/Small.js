
import React from 'react'

const Small = React.memo((props) => {
   console.log('Buenas')
   return (
      <div>
         <h4>{ props.value }</h4>
      </div>
   )
})

export default Small
