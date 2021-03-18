import React from 'react';
import './item.css';
import Aux from '../axu/axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const dropMenuItem = (props) => (
    <Aux>
        <div className="DropMenuItem" onClick={props.clicked}>
            <FontAwesomeIcon icon={props.icon}/>
<           p>{props.label}</p>
        </div>
    </Aux>
)

export default dropMenuItem;