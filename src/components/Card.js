import React from 'react'

function Card({card}) {
  return (
    <div className='Card'>
        <img src={`images/${card}.png`} />
    </div>
  )
}

export default Card