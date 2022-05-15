import React from 'react'

const InputField = ( { type, placeholder, text, value, eventHandler } ) => {
  return (
      <div>
    <label htmlFor={type}>{text}</label>
    <br />
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={eventHandler}
    />
    <br />
    </div>

  )
}

export default InputField