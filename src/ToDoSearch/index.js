import React from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoSearch.css";

function ToDoSearch(){
    const {setStateValue, searchStateValue} = React.useContext(ToDoContext)
    const onSearchValueChange = (event) =>{
        searchStateValue(event.target.value);
    }

    return(

        <input 
        className="search"
        placeholder = "Buscar Nota"
        onChange={onSearchValueChange}
        />
        
    )
}

export { ToDoSearch };