import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {

    const {
        item: ToDos,
        saveItem: saveToDos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);
    const [openModal, setOpenModal] = React.useState(false)
    const [setStateValue, searchStateValue] = React.useState('');
    const totalToDos = ToDos.length;

    const completedToDos = ToDos.filter(td => td.completed == true).length

    let searchedToDos = []

    if (!setStateValue.length >= 1) {
        searchedToDos = ToDos;
    } else {
        searchedToDos = ToDos.filter(td => {
            const ToDoText = td.text.toLowerCase();
            const SearchText = setStateValue.toLowerCase();
            return ToDoText.includes(SearchText)
        });
    }





    const completeToDos = (text) => {

        const todoIndex = ToDos.findIndex(td => td.text === text);
        const newTodos = [...ToDos]
        if (newTodos[todoIndex].completed == false){
            newTodos[todoIndex].completed = true 
        } else {
            newTodos[todoIndex].completed = false
        }
        
        saveToDos(newTodos)
    }

    const deleteToDos = (text) => {
        const todoIndex = ToDos.findIndex(td => td.text === text);
        const newTodos = [...ToDos]
        newTodos.splice(todoIndex, 1)
        saveToDos(newTodos)

    }

    const addToDo = (text) => {
        const newTodos = [...ToDos];
        newTodos.push({
            text,
            completed: false,
        });
        saveToDos(newTodos)
    }



    return (
        <ToDoContext.Provider value={
            {
                error,
                loading,
                totalToDos,
                completedToDos,
                setStateValue,
                searchStateValue,
                searchedToDos,
                completeToDos,
                deleteToDos,
                openModal,
                setOpenModal,
                addToDo,
            }
        }>
            {props.children}
        </ToDoContext.Provider>
    )
}

export { ToDoContext, ToDoProvider };