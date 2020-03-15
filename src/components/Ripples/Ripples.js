
import React, { memo } from "react";
import './ripples.scss';

function Ripples({children, type}) {
  let domref;

    function handleMouseDown(event) {
        const position = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - position.left;
        const y = event.clientY - position.top;

        const w = event.currentTarget.offsetWidth;
        
        const ripple = document.createElement('span');
        
        ripple.className = `ripple ripple-${type || "blue"}`;
        ripple.style.left = x + 'px';
        ripple.style.top  = y + 'px';
        ripple.style.setProperty('--scale', w);
    
        domref.appendChild(ripple);
    
        setTimeout(() => {
          ripple.parentNode.removeChild(ripple);
        }, 500);  
    }


  function setRef(domNode) {
    domref = domNode;
  } 

    return (
        <div className = "rippleDiv" onMouseUp = {handleMouseDown}
          ref = {setRef }
        >  
          {children}
        </div>
    );
}

export default memo(Ripples)