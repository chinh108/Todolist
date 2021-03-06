import React, {useState, useEffect} from 'react';
import './workplace.css';
import Aux from '../axu/axu';
import SideBar from '../sidebar/sidebar';
import Main from '../main/main';
import NavigationBar from '../navigationbar/navigationbar';
import store from 'store';
import history from '../../../history/history';
import Modal from '../modal/modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faShareSquare } from '@fortawesome/free-solid-svg-icons';
import AddTaskListPanel from '../addtask/addtask';
import axios from '../../../axios/axios';
import taskList from '../sidebar/project/tasklist/tasklist';
import Inbox from '../inbox/inbox';
import Share from '../share/share'; 
import ShareTaskListPanel from '../sharepanel/sharepanel';

function WorkPlace(props) {

    const [taskLists, setTaskLists] = useState([]);
    const [message, setMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tasklistName, setTasklistName] = useState("");
    const [todo1Name, setTodo1Name] = useState("");
    const [todo2Name, setTodo2Name] = useState("");
    const [showAddList, setShowAddList] =useState(false);
    const [todoAddition, setTodoAddition] = useState("");
    const [shared, setShared] = useState([]);
    const [share, setShare] = useState([]);
    const [controller, setController] = useState(0);
    const [showShareList, setShowShareList] = useState(false);
    const [taskListName, setTaskListName] = useState("");
    const [id, setId] = useState("");
    const [editPermission, setEditPermission] = useState(false);
    const [correctTaskList, setCorrectTaskList] = useState(false);
    const [users, setUsers] = useState([]);
    const [correctEmail, setCorrectEmail] = useState(false);
    const [taskId, setTaskId] = useState("");
    const [shareMessage, setShareMessage] = useState(false);

    useEffect(() => {
        async function fetchTaskList(){
            try {
                const request = await axios.request('/task_lists');
                setTaskLists(request.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTaskList();
    }, [loading]);

    useEffect(() => {
        async function fetchTaskList(){
            try {
                const request = await axios.request('/task_lists');
                setTaskLists(request.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTaskList();
    }, []);

    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/task_lists');
                const taskList = request.data;
                const share = [];
                taskList.map(taskList => {
                    if(taskList.share_count !== 0){
                        let object = {id: taskList.id, name: taskList.name};
                        share.push(object);
                    }
                })
                setShare(share);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [loading]);

    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/shared');
                setShared(request.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])
    
    useEffect(() => {
        async function fetchData () {
            try {
                const request = await axios.request('/users');
                setUsers(request.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    },[])

    const logout = () => {
        store.set('isLoggedIn', false);
        store.set('access_token',"");
        store.set('uid', "");
        store.set('client', "");
        history.push("/account");
    };
    
    const refeshPage = () => {
        history.push('/account');
    };

    const clickTodoHandler = () => {
        setController(0);
    };

    const clickInboxHandler = () => {
        setController(1);
    };

    const clickShareHandler = () => {
        setController(2);
    };
    
    const setTasklistsName = (taskList) => {
        setTasklistName(taskList.trim());
    }

    const setTodo1 = (toDo1) => {
        setTodo1Name(toDo1.trim());
    } 

    const setTodo2 = (toDo2) => {
        setTodo2Name(toDo2.trim());
    }

    const setTodo = (todo) => {
        setTodoAddition(todo.trim());
    }

    const setTaskListId = (taskList) => {
        let tasklist = taskList;
        if(correctTaskList === true){
            setCorrectTaskList(false);
        } 
        taskLists.map(taskList => {
            if (taskList.name === tasklist){
                setCorrectTaskList(true);
                setTaskId(taskList.id);
                return;
            }
        })
    }

    const setUserEmail = (email) => {
        if(correctEmail === true){
            setCorrectEmail(false);
        }
        users.map(user => {
            if(user.email === email){
                setCorrectEmail(true);
                setId(user.id);
            }
        })   
    }

    const setEdit = (permission) => {
        if(permission === "editor"){
            setEditPermission(true);
        } else if(permission === "watcher"){
            setEditPermission(false);
        }
    }

    const submitHandler = () => {
        setLoading(true);
        if(tasklistName === ""){
            setMessage(true);
            setLoading(false);
        }else{
            axios.post('/task_lists', JSON.stringify({"name": `${tasklistName}`}))
            .then(res => {
                const id = res.data.id;
                if(todo1Name === ""){
                    if(todo2Name === ""){
                        setLoading(false);
                        setMessage(false);
                        setShowAddList(false);
                        return;
                    }else{
                        axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todo2Name}`}))
                        .then(res => {
                            setLoading(false);
                            setMessage(false);
                            setShowAddList(false);
                        })
                        .catch(err => {
                            console.log(err);
                        })
                    }
                }else{
                    axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todo1Name}`}))
                    .then(res => {
                        if(todo2Name === ""){
                            setLoading(false);
                            setMessage(false);
                            setShowAddList(false);
                            return;
                        }else{
                            axios.post(`/task_lists/${id}/todos`, JSON.stringify({"name": `${todo2Name}`}))
                            .then(res => {
                                setLoading(false);
                                setMessage(false);
                                setShowAddList(false);
                            })
                            .catch(err => {
                                console.log(err);
                            })
                        }
                    })  
                    .catch(err => {
                        console.log(err);
                    }) 
                }
        })
        .catch(err => {
            console.log(err);
        })
    }

    }

    const cancelAddTaskListHandler = () => {
        setLoading(false);
        setMessage(false);
        setShowAddList(false);
    }

    const addTasklistHandler = () => {
        setShowAddList(true);
    }

    const shareTasklistHandler = () => {
        setShowShareList(true);
    }

    const cancelShareTaskListHandler = () => {
        setLoading(false);
        setMessage(false);
        setShowShareList(false);
        setCorrectTaskList(false);
        setCorrectEmail(false);
        setId("");
        setEditPermission(false);
        setTaskId("");
    }

    const submitShare = () => {
        setLoading(true);
        axios.post(`/task_lists/${taskId}/share`, {"user_id": `${id}`, "is_write":`${editPermission}`})
        .then(res => {
            setLoading(false);
            setShowShareList(false);
        })
        .catch(err => {
            console.log(err);
        })
    }
    
        return(
            <Aux>
                <div className="WorkPlace">
                    <SideBar
                        clickTodo={clickTodoHandler}
                        clickInBox={clickInboxHandler}
                        clickShare={clickShareHandler}
                        tasklists={taskLists.length}
                        share={share.length}
                        shared={shared.length}
                        controller={controller}/>
                    <div className="ActionArea">
                        <NavigationBar 
                            refeshPage={refeshPage} 
                            clickedSignOutButton={logout}/>
                        {controller === 0 ? (<Main
                            tasklists={taskLists}>
                            <Modal 
                                show={showAddList}
                                cancel={cancelAddTaskListHandler}>
                            <AddTaskListPanel
                                setTaskListName={setTasklistsName}
                                setTodo1Name={setTodo1}
                                setTodo2Name={setTodo2}
                                submitHandler={submitHandler}
                                loading={loading}
                                message={message}/>
                            </Modal>
                            <Modal 
                                show={showShareList}
                                cancel={cancelShareTaskListHandler}>
                            <ShareTaskListPanel
                                setUserEmail={setUserEmail}
                                setTasklistName={setTaskListId}
                                submitHandler={submitShare}
                                loading={loading}
                                correctTaskList={correctTaskList}
                                correctEmail={correctEmail}
                                setData={setEdit}/>
                            </Modal>
                            <div className="TaskListOption">
                                <FontAwesomeIcon 
                                    icon={faPlus} 
                                    onClick={addTasklistHandler}/>
                                <FontAwesomeIcon 
                                    icon={faShareSquare}
                                    onClick={shareTasklistHandler}/>
                            </div>
                        </Main>
                    ) : null}
                    {controller === 1 ? <Inbox tasklists={shared}/>  : null}
                    {controller === 2 ? <Share tasklists={share}/> : null}
                    </div>
                </div>
            </Aux>
        )
}

export default WorkPlace;