import React, { useState, useEffect, useRef } from "react";
import "./drawer.scss";
import classNames from "classnames";

export function Drawer({position = "right", children, show, onClose}) {

    const [state, setState] = useState({
        drawerStyle: {transform: `translateX(100vw)`},
        backdropStyle: {opacity: 0},
        unMount: true
    })


    console.log("Rendered");
    //const [drawerStyle, setDrawerStyle] = useState({transform: `translateX(100vw)`});

    //const [backdropStyle, setBackdropStyle] = useState({opacity: 0})

    //const [unMount, setUnMount] = useState(true);

    const ref = useRef(null);

    useEffect(() => {
        if(show) {

            setState({
                drawerStyle: {transform: "none"},
                backdropStyle: {opacity: 1},
                unMount: false
            });
            /*setDrawerStyle({transform: "none"});
            setBackdropStyle({opacity: 1})
            setUnMount(false);*/

        } else if(!state.unMount) {
            //setDrawerStyle({transform: `translateX(${ref.current.clientWidth}px)`});
            //setBackdropStyle({opacity: 0})
            setState({
                drawerStyle: {transform: `translateX(${ref.current.clientWidth}px)`},
                backdropStyle: {opacity: 0},
                unMount: state.unMount
            })
        }
    }, [show, state.unMount])

    function handleTransitionEnd() {
        !show && setState({...state, unMount: true});
    }

    if(!show && state.unMount) {
        return null;
    }

    return (
        <div className = "drawer-overlay">
            <div style = {state.backdropStyle} onClick = {onClose} className = "backdrop"> </div>

            <div ref = {ref} onTransitionEnd = {handleTransitionEnd} className={classNames("drawer-container", {})} style = {state.drawerStyle}>

                {children}

            </div>

        </div>
    );
}