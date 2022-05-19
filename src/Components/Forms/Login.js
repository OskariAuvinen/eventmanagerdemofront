import React from 'react';
import Button from './Button';
import Footer from '../Footer';
import InputField from './InputField';

const Login = ({
    handleEmail,
    handlePassword,
    handleSubmit,
    email,
    password
}) => {
    return (
        <div className='container'>
            <form>
                <InputField
                    type="email"
                    text="Email:"
                    placeholder="email"
                    value={email}
                    eventHandler={handleEmail}
                />
                <InputField
                    type="password"
                    text="Password:"
                    placeholder="password"
                    value={password}
                    eventHandler={handlePassword}
                />
                <Button
                    handleSubmit={handleSubmit}
                    text="Submit"
                />
            </form>
            <Footer />
        </div>
    )
}

export default Login