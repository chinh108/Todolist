import React from 'react';
import './todos.css';
import Aux from '../axu/axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';


const todo = (props) => (
    <Aux>
        <div className="Todo">
            <div className="TodoIcon">
                <FontAwesomeIcon icon={faCircle} color={props.color}/>
            </div>
            <p className="TodoLabel">{props.label}</p>
        </div>
    </Aux>
)

export default todo;