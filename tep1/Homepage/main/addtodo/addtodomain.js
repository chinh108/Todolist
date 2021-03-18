import React from 'react';
import './addtodomain.css';
import Aux from '../axu/axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function AddTodoMain(props) {

    const changeHandler = (e) => {
        let value = e.target.value;
        props.setData(value);
    }
    
    return (
        <Aux>
            <div className="addtodomain">
                <FontAwesomeIcon icon={faPlus} onClick={props.click} className="addtodomainBtn"/>
                <input type="text" placeholder="Add todo" onChange={changeHandler} value={props.value}/>
            </div>
        </Aux>
    )
}

export default AddTodoMain;