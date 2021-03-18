import React from 'react';
import './drop.css';
import Aux from '../axu/axu';
import { faAddressCard, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import DropMenuItem from './dropitem/item';

const dropMenu = (props) => (
    <Aux>
        <div className="DropMenu">
            <DropMenuItem label="Profile" icon={faAddressCard}/>
            <DropMenuItem label="Log Out" icon={faSignOutAlt} clicked={props.clickedSignOutButton}/>
        </div>
    </Aux>
)

export default dropMenu;