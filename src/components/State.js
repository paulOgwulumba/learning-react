import React from 'react'

function State({text, type}) {
  return (
    <div>
        <h2 className={`State__text ${type}`}>{text}</h2>
    </div>
  )
}

export default State