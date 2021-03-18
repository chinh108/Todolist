import React from 'react';
import WorkPlace from './workplace/workplace';
import store from 'store';
import history from '../../history/history';
import './home.css';

const isLoggedIn = store.get("isLoggedIn");



const homePage = () => {
    if(isLoggedIn === false){   
        return history.push('/account');
    }
    return(
        <div className="HomePage">
            <WorkPlace/>
        </div>
        
    )
}

export default homePage;