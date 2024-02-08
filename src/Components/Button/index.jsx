import React from 'react'

const ButttonComponent = ({text, handleClick}) => {
  return (
    <button onClick={handleClick} type="button" className='AddTaskBtn'>
    {text}
   </button>
  )
}

export default ButttonComponent