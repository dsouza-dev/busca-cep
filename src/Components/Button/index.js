import React from 'react'

const Button = ({children, onClick}) => {
  return (
    <div className='buttonContainer'>
        <button className='btn' onClick={onClick}>{children}</button>
    </div>
  )
}

export default Button