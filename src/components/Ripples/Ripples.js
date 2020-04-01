
import React, { memo, useRef } from "react";
import './ripples.scss';

function Ripples({type, event, children}) {

  let domref = useRef(null);

    function handleMouseDown(event, keyCode) {
       if(keyCode && keyCode !== 13) return;

        let leftStyle, topStyle;
        const position = event.currentTarget.getBoundingClientRect();
        const w = event.currentTarget.offsetWidth;
        const ripple = document.createElement('span');

        if(keyCode === 13) {
          leftStyle = "50%";
          topStyle = "50%";
        } else {
           leftStyle = `${event.clientX  - position.left}px`;
           topStyle = `${event.clientY - position.top}px`;
        }


        ripple.className = `ripple ripple-${type || "blue"}`;
        ripple.style.left = leftStyle;
        ripple.style.top  = topStyle;
        ripple.style.setProperty('--scale', w);

    
        domref.current.appendChild(ripple);
    
        setTimeout(() => {
          ripple.parentNode.removeChild(ripple);
        }, 500);  
    }


    return (
        <div className = "rippleDiv"  onMouseUp = {handleMouseDown}  
          ref = {domref}
        >  
          {children}
        </div>
    );
}

export default memo(Ripples)