import React, { useState } from "react";
import "./select.scss";

export function Select({selected, children, placeHolder = "", onChange, error}) {
    
    const [visible, setVisible] = useState(false);

    function hideOptions() {
        setVisible(false);
        document.removeEventListener('click', hideOptions);
    }

    function handleClick() {
        setVisible(true);
        document.addEventListener('click', hideOptions);
    }

    function xyz(evt) {
        onChange && onChange(evt);
    }

    return (

        <div className = "select-container">

            <label className = {`select-label ${error ? "select-error" : ""}`} >Age</label>

            <div onClick = { handleClick } className = {selected ? `selected-option ${ error ? "error-option" : ""}` : "select-placeholder"} > {selected || placeHolder} </div>
 
            { error && <div className = "select-error"> Error </div>}

            <ul onClick = {xyz}  className = {`select-options ${ visible ? "select-show" : ""}`}>

                {children}

            </ul>

        </div>

    );
}