import React, { useState, useEffect, useRef } from "react";
import "./drawer.scss";
import classNames from "classnames";

export function Drawer({position = "right", children, show, onClose}) {

    console.log("Rendered");
    const [drawerStyle, setDrawerStyle] = useState({transform: `translateX(100vw)`});

    const [backdropStyle, setBackdropStyle] = useState({opacity: 0})

    const [unMount, setUnMount] = useState(true);

    const ref = useRef(null);

    useEffect(() => {
        if(show) {

            setDrawerStyle({transform: "none"});
            setBackdropStyle({opacity: 1})
            setUnMount(false);

        } else if(!unMount) {
            setDrawerStyle({transform: `translateX(${ref.current.clientWidth}px)`});
            setBackdropStyle({opacity: 0})
        }
    }, [show, unMount])

    function handleTransitionEnd() {
        !show && setUnMount(true);
    }

    if(!show && unMount) {
        return null;
    }

    return (
        <div className = "drawer-overlay">
            <div style = {backdropStyle} onClick = {onClose} className = "backdrop"> </div>

            <div ref = {ref} onTransitionEnd = {handleTransitionEnd} className={classNames("drawer-container", {})} style = {drawerStyle}>

                {children}

            </div>

        </div>
    );
}