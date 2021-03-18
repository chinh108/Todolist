import React from 'react';
import './todo.css';
import Aux from '../axu/axu';

const todos = (props) => (
    <Aux>
        <div className="Todos">
            {props.children}
        </div>
    </Aux>
)

export default todos;