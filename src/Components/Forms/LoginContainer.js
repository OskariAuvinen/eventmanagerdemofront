import React, { useState } from "react";
import Login from "./Login";

const LoginContainer = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmail = (event) => {
        console.log(event.target.value);
        setEmail(event.target.value);
    };
    const handlePassword = (event) => {
        console.log(event.target.value);
        setPassword(event.target.value);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("handlesubmit called");
    };
    return (
        <div>
            <Login
                handleEmail={handleEmail}
                handlePassword={handlePassword}
                handleSubmit={handleSubmit}
                Email={email}
                Password={password}
            />
        </div>
    );
}

export default LoginContainer;