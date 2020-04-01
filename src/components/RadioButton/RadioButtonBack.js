import React, { useState } from "react";
import "./radiobutton1.scss";
import Ripples from "../Ripples/Ripples";
import classNames from "classnames";

export function RadioButton1({name, children, onChange, type = "secondary"}) {

    const [focused, setFocused] = useState(false);

    function handleFocus() {
        setFocused(true);
    }

    function handleBlur() {
        setFocused(false);
    }

    return (
        <label >
            <span className= {classNames("span1 container rippleAnimation", { "focus-span1-primary": focused, "focus-span1-secondary": type === "secondary" && focused})}>
                <Ripples type = {type === "primary" ? "blue" : "pink"}>
                    <input  onFocus = {handleFocus} onBlur = {handleBlur} type="radio" className="check" name={name}></input>
                    <span className= {classNames("checkmark", {secondary: type === "secondary"})}></span>
                </Ripples>
            </span>
            <span className="span-label">{children}</span>
        </label>
    );
}
