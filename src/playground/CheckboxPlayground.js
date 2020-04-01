import React from "react";
import { Checkbox } from "../components/Checkbox/Checkbox";

export function CheckboxPlayground() {
    return (
        <div  style = {{display: "flex"}}>
            <Checkbox>Option 1</Checkbox>
            <Checkbox>Option 2</Checkbox>
            <Checkbox>Option 3</Checkbox>
            <Checkbox>Option 4</Checkbox>
        </div>
    );
}