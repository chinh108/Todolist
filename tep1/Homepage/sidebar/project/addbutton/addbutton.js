import React from 'react';
import './addbutton.css';
import Aux from '../axu/axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


const addButton = (props) => (
    <Aux>
        <div className="AddButton">
            <div className="AddButtonIcon">
                <FontAwesomeIcon icon={faPlus} color="white"/>
            </div>
            <div className="AddButtonInputArea">
                <input type="text" placeholder="them Du an"/>
            </div>
        </div>
    </Aux>
)

export default addButton;