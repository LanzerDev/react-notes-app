import React from "react";
import './ToDoItem.css'
function ToDoItem(props){
   
   
    
    return (
        <div className="rgb">
        <li>
            <span 
            className="check"
            onClick={props.onCompleted}
            >
                <img width={'20px'} src="https://cdn-icons-png.flaticon.com/512/32/32282.png"/>
            </span>
            <p className={`text ${props.completed && 'text-completed'}`}>{props.text}</p>
            <span 
            className="x"
            onClick={props.onDeleted}
            >X</span>
        </li>
        </div>
    );
}

export { ToDoItem }