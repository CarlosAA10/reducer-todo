import React , { useState, useReducer } from 'react'; 
import { Reducer, initialState } from '../reducers/simpReducer'; 


const  ToDoList = () => {

    const [state, dispatch] = useReducer(Reducer, initialState); 
    const [ newTaskText, setNewTaskText ] = useState(''); 

    const handleChanges = e => {
        e.preventDefault(); 
        setNewTaskText({
            item: e.target.value
        }); 
    }

    const handleSubmit = chore => {
        const obj = {
            item: chore, 
            completed: false, 
            id: Date.now(), 
        }; 


         
    }

    return(
        <div>
            <h2>Hello There: </h2>
            <div>
                {initialState.map(task => {
                    return(<h2>{task.item}</h2>)
                })}
            </div> <br/>

            <div>
                {console.log(state)}
                <form>
                    <input type="text" name="chore" value={newTaskText}/> 
                </form>
            </div>

        </div>
    )
}

export default ToDoList; 