import "./style/Summary.css";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Summary() {
  const [hasBeenInView, setHasBeenInView] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  if (inView && !hasBeenInView) {
    setHasBeenInView(true);
  }

  return (
    <>
      <div className="sum-container" ref={ref}>
        <h1
          className="sum-text"
          style={{
            display: hasBeenInView ? 'block' : 'none',
          }}
        >
          BMX Shop - Buy your dream bike!
        </h1>
      </div>
    </>
  );
}
