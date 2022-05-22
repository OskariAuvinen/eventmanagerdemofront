import React from 'react'

const Button = ({ text, handleSubmit, disabled }) => {

    return (
        <div className='button__wrapper'>
            <button
                // disabled={disabled}
                className='button'
                onClick={handleSubmit}>{text}</button>
        </div>
    )
}

export default Button