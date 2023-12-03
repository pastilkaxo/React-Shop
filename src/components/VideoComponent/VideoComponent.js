import React from "react";
import video from "./video/vid.mp4"
import "./style/VideoComponent.css"

export default function VideoComponent() {
    return(
        <>
        <div className="video-container">
             <div className="video-content">
                    <video src={video} className="videoMain" autoPlay="autoplay" loop muted  />
             </div>
        </div>
        </>
    )
}