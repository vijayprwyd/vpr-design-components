import React, {useState} from "react";
import { Drawer } from "../components/Drawer/Drawer";
import { Button } from "../components/Button/Button";

export function DrawerPlayground() {


    const [show, setShow] = useState(false);

    function hideDrawer() {
        setShow(false);
    }

    return (
        <>

            <Button  type = "primary" color = "pink" onClick = {() => setShow(true)}>Show drawer</Button>
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