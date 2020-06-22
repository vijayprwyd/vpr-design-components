import React from "react";
import { Tab } from "../components/Tabs/Tab";
import { Tabs } from "../components/Tabs/Tabs";

export function TabPlayground() {
    return (
        <div style = {{margin: "10px"}}>

            <Tabs>

                <Tab index = {0}>Tab 1</Tab>
                <Tab index = {1}>Tab 2</Tab>


            </Tabs>

        </div>
    );
}