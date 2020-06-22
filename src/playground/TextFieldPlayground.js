import React from "react";
import "./playground.scss";

import { TextField } from "../components/TextField/TextField";

export function TextFieldPlayground() {
    return (
        <div
        style = {{
            width: "100%",
            margin: "20px",
            minWidth: "190px"
        }}

        
        >
        <TextField labelId = "name" className = "input-width"/>

        </div>
    );
}