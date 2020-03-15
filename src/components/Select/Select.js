import React, { useState, useRef, useEffect } from "react";
import "./select.scss";

export function Select({selected, children, placeHolder = "", onChange, error}) {

    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    const ulRef = useRef(null);

    useEffect(() =>{
        visible && ulRef.current.querySelector('.menu-item-selected').focus();
    }, [visible]);

    function hideOptions(evt) {

        if(ref.current !== evt.target) {
            setVisible(false);
            document.removeEventListener('click', hideOptions);    
        }
    }

    function handleClick() {
        setVisible(!visible);
        document.addEventListener('click', hideOptions);
    }

    function handleSelectKeyPress(event) {
        if(event.keyCode === 13 || event.charCode === 13) {
            handleClick(event);
        } else if( event.keyCode === 38 || event.keyCode === 40 ) {
            setVisible(true);
        }
    }

    function handleUlKeyPress(event) {
        if(event.charCode === 13) {
            setVisible(false);
            ref.current.focus();
            onChange(event);
        }
    }

    function handleUlKeyDown(event) {
        if(event.charCode === 13) {
            onChange(event);
        } else if(event.keyCode === 38) {
            (event.target.previousSibling || event.target.parentNode.lastChild).focus();
        } else if(event.keyCode === 40) {
            (event.target.nextSibling || event.target.parentNode.firstChild).focus();
        } 
    }

    function xyz(evt) {
        if(evt.target.tagName !== "UL") {
            onChange && onChange(evt);
        }
    }

    return (

        <div className = "select-container">

            <label className = {`select-label ${error ? "select-error" : ""}`} >Age</label>

            <div ref = { ref }  tabIndex="0" onKeyDown = { handleSelectKeyPress }  onClick = { handleClick } className = {selected ? `selected-option ${ error ? "error-option" : ""}` : "selected-option select-placeholder"} > {selected || placeHolder} </div>
 
            { error && <div className = "select-error"> Error </div>}

            <ul ref = {ulRef} onKeyPress = {handleUlKeyPress} onKeyDown = {handleUlKeyDown} tabIndex = "0" onClick = {xyz}  className = {`select-options ${ visible ? "select-show" : ""}`}>

                {children}

            </ul>

        </div>
    );
}