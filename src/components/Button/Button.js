import React, { useRef } from "react";
import './button.scss';
import { createRipple } from "../Ripples/useRipple";

export function Button({color, type}) {

    const domref = useRef(null);

    function handleKeyUp(event) {
        event.preventDefault();

        let ele = createRipple({event, type: color });
        if(ele) {
            domref.current.appendChild(ele)
        }
        domref.current.parentNode.focus();
    }

    return (
        <button tabIndex = "0" className={`btn ${color} rippleAnimation ${`btn-${type}`}`} onKeyUp = { handleKeyUp} onMouseUp = {handleKeyUp} >

            Click Me

            <div className = "rippleDiv"  ref = {domref}></div>

        </button>
    );
}