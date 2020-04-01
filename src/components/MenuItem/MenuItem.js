import React from "react";
import "./menuitem.scss";

export function MenuItem({ children, selected, value, disabled }) {


    return (
        //<li onKeyDown = {function(evt){ }} onKeyPress={function(evt){ }} tabIndex="0" disabled={disabled} value={value} className={`menu-item ${selected ? "menu-item-selected" : ""} `} > {children} </li>
        <li  tabIndex="-1" disabled={disabled} value={value} className={`menu-item ${selected ? "menu-item-selected" : ""} `} > {children} </li>

    );
}