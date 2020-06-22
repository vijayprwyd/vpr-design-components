import React, {useEffect, useState } from "react";
import "./snackbar.scss";

export function SnackBar({children, dismissible = true, duration, offset = {
    right: "100px",
    top: "100px"
}}) {

    const [style, setStyle] = useState({
        [offset.bottom ? "bottom" : "top"]: "0"
    });

    const [show, setShow] = useState(true);

    useEffect(() => {
        setStyle({
            [offset.bottom ? "bottom" : "top"]: `${offset.bottom || offset.top || 100}`
        });
        
        if(duration) {
            setTimeout(handleClose, duration);
        }
    }, [duration, offset.bottom, offset.top]);

    function handleClose() {
        setStyle({
            [offset.bottom ? "bottom" : "top"]: "-100px"
        });
    }

    function handleTransitionEnd() {

        if(style.top < 0 || style.bottom < 0) {
            setShow(false);
        }
    }

    if(!show) {
        return null;
    }

    return (
        <div style = {{ 
            ...offset,
            ...style
        }} 

        onTransitionEnd = {handleTransitionEnd} className = "snackbar snack-container">

        <div >
            
            {children}

        </div>

        { dismissible && <button onClick = {handleClose}>X</button> }

        </div>
    )
}