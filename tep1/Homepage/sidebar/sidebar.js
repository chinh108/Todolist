import React from 'react';
import './sidebar.css';
import Aux from '../axu/axu';
import Item from './item/item';
import { faCalendarMinus, faInbox, faStar } from '@fortawesome/free-solid-svg-icons';

function SideBar(props) {
    let op1 = true;
    let op2 = false;
    let op3 = false;

    if(props.controller === 0){
        op1 = true;
        op2 = false;
        op3 = false;
    }else if(props.controller === 1){
        op1 = false;
        op2 = true;
        op3 = false;
    }else{
        op1 = false;
        op2 = false;
        op3 = true;
    }

    return (
        <Aux>
            <div className="SideBar">
                {op1 ? <Item icon={faStar} label="Todo" number={props.tasklists} color="#5cb85c" click={props.clickTodo}/> : <Item icon={faStar} label="Todo" number={props.tasklists} color="white" click={props.clickTodo}/>}
                {op2 ? <Item icon={faInbox} label="Inbox" number={props.shared} color="#5cb85c" click={props.clickInBox}/> : <Item icon={faInbox} label="Inbox" number={props.shared} color="white" click={props.clickInBox}/>}
                {op3 ? <Item icon={faCalendarMinus} label="Share" number={props.share} color="#5cb85c" click={props.clickShare}/> : <Item icon={faCalendarMinus} label="Share" number={props.share} color="white" click={props.clickShare}/>}
            </div>
        </Aux>
    )
}

export default SideBar;