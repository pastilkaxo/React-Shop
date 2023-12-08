import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style/BikeSlider.css"
import { Carousel } from 'react-responsive-carousel';

export default function BikeSlider({cardToShow}){
    return(
        <Carousel showArrows={true} className="carousel-divs">
        {cardToShow.img.map((imageSrc, index) => (
          <div key={index} className="car-div-img">
            <img className="info_img" src={imageSrc} alt="" />
          </div>
        ))}
      </Carousel>
    )
}