import React from 'react';
import './draw.css';
import Aux from '../axu/axu';

const drawToggle = (props) => (
    <Aux>
        <div className="DrawerToggle" onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </Aux>
)

export default drawToggle;