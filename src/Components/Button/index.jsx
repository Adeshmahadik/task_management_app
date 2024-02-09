import React from 'react'

const ButttonComponent = ({text, handleClick, type = "button", style, className}) => {
  return (
    <button onClick={handleClick} type={type} style={{...style}} className= {className}>
    {text}
   </button>
  )
}

export default ButttonComponent