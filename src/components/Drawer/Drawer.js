import React, { useState, useEffect, useRef } from "react";
import "./drawer.scss";
import classNames from "classnames";

function getAxisDirection(position) {

    return (position === "right" || position === "left") ? "X" : "Y"
}


export function Drawer({position = "right", children, show, onClose}) {

    const [drawerStyle, setDrawerStyle] = useState({
        transform: `translate${getAxisDirection(position)}(${position === "left" || position === "top" ? -100 : 100}vw)`,
    });

    const [backdropStyle, setBackdropStyle] = useState({opacity: 0})

    const [unMount, setUnMount] = useState(true);

    const ref = useRef(null);
    const ref1 = useRef(null);

    useEffect(() => {
        if(show) {
            (!document.body.onfocus) && (document.body.onfocus = function() {
                ref.current && ref.current.focus();
            });
            ref.current.focus();
            setDrawerStyle({transform: "none"});
            setBackdropStyle({opacity: 1})
            setUnMount(false);
            document.body.style = "pointer-events: none; overflow:hidden";
        } else if(!unMount) {
            setDrawerStyle({transform: `translate${getAxisDirection(position)}(${(position === "left" || position === "top" ? -1 : 1) * (position === "right" || position === "left" ? ref.current.clientWidth : ref.current.clientHeight)}px)`});
            setBackdropStyle({opacity: 0});
        }
    }, [show, unMount, position])

    function handleTransitionEnd() {
        !show && setUnMount(true);
    }

    if(!show && unMount) {
        document.body.style = "pointer-events: all; overflow:scroll";
        document.body.onfocus = null;
        return null;
    }

    function handleBlur() {
        ref1.current.focus();
    }

    function handleKeyPress(evt) {
        if(evt.keyCode === 9) {
            ref.current.focus();

        } 
    }

    return (

        <div tabIndex="-1" className="drawer-overlay">

            <div style={backdropStyle} onClick={onClose} className="backdrop" tabIndex="-1" > </div>

            <div tabIndex="0" onKeyDown={handleBlur}></div>

            <div tabIndex="-1" ref={ref} onTransitionEnd={handleTransitionEnd} className={classNames("drawer-container", {[`d${position}`]: true})} style={drawerStyle}>
                {children}
            </div>

            <div ref={ref1} tabIndex="0" onKeyUp={handleKeyPress} ></div>
        </div>
    );
}