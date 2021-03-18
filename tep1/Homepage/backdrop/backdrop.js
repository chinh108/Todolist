import React from 'react';
import './backdrop.css';
import Aux from '../axu/axu';

const backDrop = (props) => (
    <Aux>
        {props.show ? <div className="backdrop" onClick={props.cancel}></div> : null}
    </Aux>
)

export default backDrop;