import React , { useState, useReducer } from 'react'; 
import { Reducer, initialState } from '../reducers/simpReducer'; 

import ToDoList from './ToDoList'; 


const  ToDoForm = () => {
    const [state, dispatch] = useReducer(Reducer, initialState); 
    const [ newTaskText, setNewTaskText ] = useState(''); 

    const handleChanges = e => {
        e.preventDefault(); 
        setNewTaskText(
             e.target.value
        ); 
    }; 



    const addToDo = (states) => { 
        dispatch({ type: 'ADD_TODO', payload: states });
    } 

    const clickToComplete = (taskId) => {
        console.log('this is the ID',taskId)
        dispatch({ type: 'MAKE_COMPLETED', payload: taskId }); 
    }

    const deleteToDo = () => {
        dispatch({ type: 'DELETE_TODO' }); 
    }




    return(
        <div>
            <h2>Hello There: </h2>
            {console.log('this is state',state)}
            <div>
                {state.todos.map(task => {
                    console.log('this is task',task.id)
                   return <ToDoList key={task.id} task={task} clickToComplete={clickToComplete}/> 
                })}
            </div> <br/>

            <div>
                <form >
                    <input type="text" name="chore" value={newTaskText} onChange={handleChanges} /> 
                    <button onClick={(e) => { e.preventDefault(); addToDo(newTaskText)}} >Add Task</button>
                </form>
            </div>
            <div>
                <button onClick={deleteToDo}>Delete Tasks</button>
            </div>

        </div>
    )
}

export default ToDoForm; 