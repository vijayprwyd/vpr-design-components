import React, {useState, useRef} from "react";
import "./textfield.scss";
import classNames from 'classnames';

export function TextField({className, error}) {
    
    const [focused, setFocused] = useState(false);
    const ref = useRef(null);

    return (

        <div className = {`textfield-container ${className}`}>

            <label className = {classNames('text-label', { 'label-focused': focused, 'label-blurred': !focused && (!ref.current || ref.current.value === "")})}>Standard</label>
            <input 
                onFocus = {() => setFocused(true)} 
                className = {classNames(`text-input`, { "input-error" : error })}  
                type = "text"
                ref = {ref}
                onBlur = {() => setFocused(false)}/>
        </div>
    );
}