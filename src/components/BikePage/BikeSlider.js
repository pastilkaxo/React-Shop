import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style/BikeSlider.css"
import { Carousel } from 'react-responsive-carousel';

export default function BikeSlider({cardToShow}){
    return(
          <Carousel showArrows={true} >
            <div>
            <img className="info_img" src={cardToShow.img} width="500" height="350" alt="" />
            </div>
            <div>
            <img className="info_img" src={cardToShow.img} width="500" height="350" alt="" />
            </div>
          </Carousel>
    )
}