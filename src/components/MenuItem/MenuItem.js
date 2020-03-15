import React from "react";
import "./menuitem.scss";

export function MenuItem({ children, selected, value, disabled }) {

    return (
        <li onClick = {() => console.log("Hi")} disabled = {disabled} value = { value } className = {`menu-item ${selected ? "menu-item-selected" : ""}`} > { children } </li>
    )
}