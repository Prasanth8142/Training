import React from 'react'
import G from './G'
import H from './H'

function D({d}) {
  return (
    <div> D
        <G g={d}/>
        <H h={d}/>

    </div>
  )
}

export default D