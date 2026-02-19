import React from 'react'

import D from './D'

const C = React.memo(() => {
    console.log("C Component")

  return (
    
    <div>
   {/* {value} */}
        <D/>
    </div>
  )
})

export default C
 

// function C() {
//   console.log("C Component")
//   return (
//     <div>
//       <D/>
//     </div>
//   )
// }

// export default C