import React, {useState} from "react";
import { Select } from "../components/Select/Select";
import { MenuItem } from "../components/MenuItem/MenuItem";


export function SelectPlayground() {
    
    const [selected, setSelected] = useState({
        value: 10,
        text: "Ten"
    });

    function handleChange(evt) {
        setSelected({
            value: evt.target.value,
            text: evt.target.innerText
        });
    }
    
    return (
        <div
            style = {{
                width: "fit-content",
                margin: "20px",
                minWidth: "190px"
            }}
        
        >
        <Select
            onChange={handleChange}
            selected = {selected.text}
            placeHolder = {"value"}
        >

            {/*
                options.map(option => {
                   return  <MenuItem value = { option.value } selected = {selected.value === option.value} > {option.text} </MenuItem>  
                })
            */}
            <MenuItem value = "10" selected = {selected.value === 10} > Ten </MenuItem>
            <MenuItem  value = "20" selected = {selected.value === 20}> Twenty </MenuItem>
            <MenuItem  value = "30"  selected = {selected.value === 30}> Thirty </MenuItem>
            <MenuItem value = "40" selected = {selected.value=== 40}> Forty </MenuItem>
        </Select>

        </div>

    )
}

