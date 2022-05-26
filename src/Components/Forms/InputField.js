import React from 'react'

const InputField = ({ type, placeholder, text, value, eventHandler, className }) => {
  return (
    <div className={`${className}_container`}>
      <label className={'inputField_label'}htmlFor={type}>{text}</label>
      <br />
      <input
        className={`${className}_field`}
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