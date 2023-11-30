import "./style/Summary.css"
import React, { useState } from "react";
export default function Summary(){
     
    const useObserver = (option,cb) => {
        const observer = React.useRef(null);
        return React.useCallback((node) => {
            observer.current = new window.IntersectionObserver(cb , option);
            observer.current.observe(node);
        },[])
    }
  const [hidden , setHidden] = useState(false);

  const cbRef = useObserver({threshold:1},(entries) => {
    entries.forEach((entry) => {
        setHidden(!entry.isIntersect)
    });
  } )


    return(
        <>
         <div className="sum-container" ref={cbRef}>
            <h1>BMX Shop - Buy your dream bike!</h1>
         </div>
        </>
    )
}
