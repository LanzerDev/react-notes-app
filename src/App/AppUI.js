import React from "react";
import { ToDoCounter } from "../ToDoCounter";
import { ToDoSearch } from "../ToDoSearch";
import { ToDoItem } from "../ToDoItem";
import { ToDoList } from "../ToDoList";
import { CreateToDoButton } from "../CreateToDoButton";
import { ToDoContext } from "../ToDoContext";
import { Modal } from "../modal";
import { ToDoForm } from "../ToDoForm"
import './App.css';

function AppUI() {

    const { error,
        loading,
        searchedToDos,
        completeToDos,
        deleteToDos,
        openModal,
        setOpenModal,
    } = React.useContext(ToDoContext);

    return (
        <React.Fragment>
            <ToDoCounter />
            <ToDoSearch />

            <ToDoList>

                {loading && <p>Estamos cargando...</p>}
                {error && <p>Hubo un error</p>}
                {(!loading && !searchedToDos.length) && <p>Crea tu primera Nota! C:</p>}

                {searchedToDos.map(td => (
                    <ToDoItem
                        key={td.text}
                        text={td.text}
                        completed={td.completed}
                        onCompleted={() => completeToDos(td.text)}
                        onDeleted={() => deleteToDos(td.text)}
                    />
                ))}
            </ToDoList>
            { openModal && (
            <Modal>
                <ToDoForm />
            </Modal>)
            
            }
            <CreateToDoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
            />

        </React.Fragment>
    );
}

export { AppUI }