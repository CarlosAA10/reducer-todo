import React from 'react'; 


const ToDoList = (props) => {
    console.log('this is props',props)
    return (
        <div 
        onClick={() => props.clickToComplete(props.task.id)}
        className={`task${props.task.completed ? " completed" : ""}`}
        >
            <h2>{props.task.item}</h2>
        </div>
    )
}

export default ToDoList; 