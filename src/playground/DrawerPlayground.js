import React, {useState} from "react";
import { Drawer } from "../components/Drawer/Drawer";

export function DrawerPlayground() {


    const [show, setShow] = useState(false);

    function hideDrawer() {
        setShow(false);
    }

    return (
        <>

            <button onClick = {() => setShow(true)}>Close</button>
            <Drawer position="right" show={show} onClose={hideDrawer}>

                <div style={
                    {
                        backgroundColor: "red",
                        width: "300px",
                        height: "100%"
                    }
                }>

                    <button tabIndex = "0">cLICK ME</button>

                    <button tabIndex = "0">cLICK ME 2</button>

                </div>

            </Drawer>


        </>
    )
}