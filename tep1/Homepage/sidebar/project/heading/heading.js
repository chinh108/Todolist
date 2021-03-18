import React from 'react';
import './heading.css';
import Aux from '../axu/axu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faPlus } from '@fortawesome/free-solid-svg-icons';

const heading = (props) => (
    <Aux>
        <div className="Heading">
            <div className="IconHeading">
                <FontAwesomeIcon icon={faAngleDown} color="white"/>
            </div>
            <p className="LabelHeading">Du an</p>
            <div className="SmallAddButton">
                <FontAwesomeIcon icon={faPlus} color="white"/>
            </div>
        </div>
    </Aux>
)

export default heading;