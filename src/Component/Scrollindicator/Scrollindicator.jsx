import { useEffect } from "react";
import "./Scrollindicator.css";
import { useState } from "react";

function ScrollIndicator() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
  const handleScroll=()=>{

    const ScrollTop=document.documentElement.scrollTop;
    const ScrollHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight
    const Scrolled=(ScrollTop/ScrollHeight)*100;
    setScrollProgress(Scrolled)
  }

  document.addEventListener("scroll",handleScroll)

  return()=>{
document.removeEventListener("scroll",handleScroll)
  }
        
      }, []);
  return (
    <div className="scroll-indicatorpage">


    

    <div className="scroll-inticator">
        <div className="scroll-inticator-progress"  style={{ width: `${scrollProgress}%` }}>
            
        </div>
    </div>
    </div>
  )
}

export default ScrollIndicator