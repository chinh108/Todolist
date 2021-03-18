import React from 'react';
import './search.css';
import Aux from '../axu/axus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const search = (props) => (
    <Aux>
        <div className="Search">
                <FontAwesomeIcon icon={faSearch} color="black"/>
                <input type="text" placeholder="Ten task can tim"/>
        </div>
    </Aux>
)

export default search;