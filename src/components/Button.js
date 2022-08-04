import React from 'react'

function Button({text, type, click}) {
  return (
        <button onClick={click} className={`Button__type ${type}`}>{text}</button>
  )
}

export default Button