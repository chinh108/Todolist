import React, { Component } from 'react';
import Background from '../background/background';
import Welcome from '../../tep1/welcome/welcome';

class AccountAction extends Component{
    render(){
        return(
            <Background>
                <Welcome/>
            </Background>
        )
    }
}

export default AccountAction;