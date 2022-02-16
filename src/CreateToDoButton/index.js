import React from "react";
import './CreateToDoButton.css'

function CreateToDoButton({setOpenModal, openModal}){
    const onClickButton = () => {
        if (openModal == false){
            setOpenModal(true)
        } else {
            setOpenModal(false)
        }
        
    }
    return(
        <button 
        className="button"
        onClick={onClickButton}
        >+</button>
    )
}

export { CreateToDoButton }