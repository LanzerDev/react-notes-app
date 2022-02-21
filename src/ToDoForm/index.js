import React from 'react';
import { ToDoContext } from '../ToDoContext';
import './ToDoForm.css'

function ToDoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('')
    const {
        addToDo,
        setOpenModal,
    } = React.useContext(ToDoContext)

    const onCancel = () => {
        setOpenModal(false)
    }
    const onAdd = (event) => {
        event.preventDefault();
        addToDo(newTodoValue);
        setOpenModal(false)
    }
    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <form onSubmit={onAdd}>
            
            <textarea
                className='titulo-nota'
                placeholder={'Titulo de la nota'}
            />
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder='Escribe tu nota'
            />
            <div>
                <button
                    onClick={onCancel}
                    type="button"
                >
                    cancelar
                </button>

                <button
                    onKeyUp={onAdd}
                    type="submit"
                >
                    añadir
                </button>
            </div>
        </form>
    )
}

export { ToDoForm }