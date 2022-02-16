import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css";

function ToDoCounter(){
    const { totalToDos, completedToDos} = React.useContext(ToDoContext)
    return (
        <h2 className="header">Has completado {completedToDos} de {totalToDos} Tareas</h2>
    )
}

export {ToDoCounter};