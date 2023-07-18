import React from 'react'

function Button({onClick}) {
  return (
    <button onClick={onClick} type='submit' className='btn'>Submit</button>
  )
}

export default Button
