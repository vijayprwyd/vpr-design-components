import React from "react";
import "./switch.scss";

export function Switch({children}) {

    return (
        <label >
            <span className = "switch-icon">
                <input className="slider-input" type="checkbox"></input>
                <span className="slider-circle"></span>
                <span className = "slider-focus"></span>
                <span className="slider"></span>
            </span>
            <span className = "switch-text"> {children} </span>
        </label>
    )
}