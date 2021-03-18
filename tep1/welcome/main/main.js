import React from 'react';
import './main.css';
import LoginForm from './login/login';
import RegisterForm from './signup/signup';

const main = (props) => (
    <div className="Main">
        {props.show ? <LoginForm 
                        clickedRegisterButton={props.showRegisterForm} 
                        isRegistered={props.registered}/> : 
                      <RegisterForm 
                        clickedLoginButton={props.showLoginForm}
                        done={props.successfulRegister}/>}
    </div>
)

export default main;