import React from 'react'

const Input = ({type, placeholder, value, onChange}) => {
  return (
    <div className='containerInput'>
        <input 
        className='input'
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        />
    </div>
  )
}

export default Input