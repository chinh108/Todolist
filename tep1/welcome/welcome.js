import React, { Component } from 'react';
import Aux from '../axu/axu';
import './welcome.css';
import Image from './image/image';
import Main from './main/main';

class Welcome extends Component {

    state = {
        show: true,
        successfulRegister: false
    }

    showRegisterFormHandler = () => {
        this.setState({
            show: false
        })
    }

    showLoginFormHandler = () => {
        this.setState({
            show: true
        })
    }

    loginStep = (successful) => {
        if(successful){
            this.setState({
                show: true,
                successfulRegister: true
            })
        }
    }

    render() {
        return(
        <Aux>
            <div className="Welcome">
                <Main show={this.state.show} 
                      showRegisterForm={this.showRegisterFormHandler} 
                      showLoginForm={this.showLoginFormHandler}
                      successfulRegister={this.loginStep}
                      registered={this.state.successfulRegister}/>
                <Image />
            </div>
        </Aux>)
    }
}

export default Welcome;