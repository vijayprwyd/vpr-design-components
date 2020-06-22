import React from "react";
import { TabProvider } from "./TabProvider";
import "./tab.scss"
import Ripples from "../Ripples/Ripples";
export function Tabs({children}) {

    return (
        <TabProvider>
            <div className = "tab-head">

                {children}

            </div>
        </TabProvider>
    )
}