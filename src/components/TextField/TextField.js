import React, {useState, useRef} from "react";
import "./textfield.scss";
import classNames from 'classnames';

export function TextField({className, error, labelId}) {
    
    const [focused, setFocused] = useState(false);
    const ref = useRef(null);

    return (

        <div className = {`textfield-container ${className}`}>

            <label htmlFor = {labelId} className = {classNames('text-label', { 'label-focused': focused, 'label-blurred': !focused && (!ref.current || ref.current.value === "")})}>Standard</label>
            <input 
                id = {labelId}
                onFocus = {() => setFocused(true)} 
                className = {classNames(`text-input`, { "input-error" : error })}  
                type = "text"
                ref = {ref}
                onBlur = {() => setFocused(false)}/>
        </div>
    );
}