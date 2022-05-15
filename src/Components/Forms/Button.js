import React from 'react'

const Button = ({ text, handleSubmit }) => {
    return (
        <div className='button__wrapper'>
            <button
                className='button'
                onClick={handleSubmit}>{text}</button>
        </div>
    )
}

export default Button