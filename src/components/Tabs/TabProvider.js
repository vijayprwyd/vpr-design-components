import React, { useState } from "react";
import { TabContext } from "./TabContext";

export function TabProvider({children}) {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <TabContext.Provider value = {{
            activeIndex,
            setActiveIndex
        }}>

            { children }

        </TabContext.Provider>
    )
}