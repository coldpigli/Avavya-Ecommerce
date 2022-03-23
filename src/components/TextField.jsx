import React from 'react'

const TextField = ({label, name, placeholder, value, handleChange, type}) => {
  return (
    <div className="input-wrapper gap-d20">
        <label className="input-name txt-bold" htmlFor="input">{label}</label>
        <input 
        required 
        className="input-box" 
        name={name} 
        type={type} 
        placeholder={placeholder} 
        value={value}
        onChange={handleChange}
        />
    </div>
  )
}

export default TextField;