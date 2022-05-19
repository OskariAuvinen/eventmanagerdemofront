import React from 'react';
import Footer from '../Footer';
import InputField from './InputField';
import Button from './Button';

const Register = () => {
    return (
        <div className='container'>
            <form>
                <InputField
                    type="email"
                    text="Email:"
                    placeholder="email"
                />
                <InputField
                    type="email"
                    text="Verify mail:"
                    placeholder="verify email"
                />
                <InputField
                    type="password"
                    text="Password:"
                    placeholder="password"
                />
                <Button text="Submit"
                />
            </form>
            <Footer />
        </div>
    )
}

export default Register