import React from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const SignInForm = () => {
    return (
        <>
            <div className="p-float-label">
                <InputText id="username-input" />
                <label htmlFor="username-input">Username</label>
            </div>

            <div className="p-float-label">
                <InputText id="password-input" />
                <label htmlFor="password-input">Password</label>
            </div>

            <Button label="Sign in" />
        </>
    );
};

export default SignInForm;
