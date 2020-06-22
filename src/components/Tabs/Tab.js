import React, { useContext} from "react";
import Ripples from "../Ripples/Ripples";
import { createRipple } from "../Ripples/useRipple";
import { Button } from "../Button/Button";
import { TabContext } from "./TabContext";
import "./tab.scss";

export function Tab({children, index = 1}) {

    const tabContext = useContext(TabContext);
    const {activeIndex, setActiveIndex} = tabContext;
    console.log(activeIndex === index);

    return (



        <div onClick = {() => setActiveIndex(index)} className = "tab">

            <Button   type = "nav" className = {`  ${ activeIndex === index ? "tab-active" : ""}`}>

                { children }

            </Button>


            

        </div>
    );
}