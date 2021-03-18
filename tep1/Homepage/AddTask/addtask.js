import React from 'react';
import './addtask.css';
import Aux from '../axu/axu';
import InputTaskListArea from './InputTask/inputtask';
import SubmitButton from './Submit_buttom/submit';
import Spinner from '../../Welcome/Spinner/Spinner';

function AddTaskListPanel (props) {

    return (
        <Aux>
            <div className="addtask">
                <h2>Them Task list</h2>
                {props.message ? <p style={{color:"red"}}>Ban can nhap ten tasklist</p> : null}
                <InputTaskListArea name="TaskList" setData={props.setTaskListName}/>
                <InputTaskListArea name="Todo 1" setData={props.setTodo1Name}/>
                <InputTaskListArea name="Todo 2" setData={props.setTodo2Name}/>
                <SubmitButton click={props.submitHandler}/>
                { props.loading ? <div className="SpinnerContainer"><Spinner/></div> : null}
            </div>
        </Aux>
    )
}

export default AddTaskListPanel;