import React from "react";
import './button.scss';
import  Ripples  from "../Ripples/Ripples";

export function Button({color, type}) {

    return (
        <button className={`btn ${color} rippleAnimation ${`btn-${type}`}`} href="#">
            <Ripples type = {color}/>
            Click Me
        </button>
    );
}