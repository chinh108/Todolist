import React from 'react';
import Aux from '../axu/axu';
import Heading from './heading/heading';
import TaskList from './tasklist/tasklist';
import AddButton from './addbutton/addbutton';
import Todos from './todo/todo';
import Todo from './todo/todos/todos';

const project = (props) => (
    <Aux>
        <Heading />
        <TaskList color="lightgray" label="HABIT">
            <Todos>
                <Todo label="Guitar" color="#ff7171"/>
                <Todo label="Piano" color="#ffaa71"/>
                <Todo label="SkateBoard" color="#6e6d6d"/>
                <Todo label="Tennis" color="#91d18b"/>
            </Todos>
        </TaskList>
        <TaskList color="white" label="Learning">
            <Todos>
                <Todo label="Node JS" color="#158467"/>
                <Todo label="React JS" color="#056676"/>
                <Todo label="React Native" color="#a35d6a"/>
                <Todo label="Python" color="#a35d6a"/>
            </Todos>
        </TaskList>
        <AddButton />
    </Aux>
)

export default project;