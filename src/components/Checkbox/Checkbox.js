import React, {useState} from "react";
import './checkbox.scss';
import Ripples from "../Ripples/Ripples";
import classNames from "classnames";

export function Checkbox({children, type = "primary"}) {

    const [focused, setFocused] = useState(false);

    function handleFocus() {
        setFocused(true);
    }

    function handleBlur() {
        setFocused(false);
    }

    return (
        <label className = "check-option">
        <span className={classNames("span1" , "container" , "rippleAnimation", {
            "focus-span1-primary" : type === "primary" && focused,
            "focus-span1-secondary": type === "secondary" && focused

        })}>
            <Ripples>
            <input type="checkbox" onFocus = {handleFocus} onBlur = {handleBlur} className="check"></input>
            <span className = {`checkbox ${type === "primary" ? "pri " : "sec"}`}>

            </span>


            </Ripples>
        </span>
        <span className="span-label">{children}</span>
    </label>

    )
}
