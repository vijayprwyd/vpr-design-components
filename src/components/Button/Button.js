import React, { useRef } from "react";
import './button.scss';
import { createRipple } from "../Ripples/useRipple";

export function Button({color, type, children, ...props}) {

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
        <button {...props} tabIndex = "0" className={ `btn  ${props.className} ${color} rippleAnimation ${`btn-${type}`}`} onKeyUp = { handleKeyUp} onMouseUp = {handleKeyUp} >

            {children || "Click Me"}

            <div className = "rippleDiv"  ref = {domref}></div>

        </button>
    );
}