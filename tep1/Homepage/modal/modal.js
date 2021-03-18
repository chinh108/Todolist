import React from 'react';
import './modal.css';
import Aux from '../axu/axu';
import BackDrop from '../backdrop/backdrop';

const modal = (props) => (
    <Aux>
        <BackDrop 
            show={props.show}
            cancel={props.cancel}/>
        <div 
        className="Modal"
        style={{transform: props.show ? 'translateY(0)': 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
)