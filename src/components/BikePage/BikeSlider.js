import React,{useState} from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style/BikeSlider.css"
import { Carousel } from 'react-responsive-carousel';
import PhotoPage from "../PhotoPage/PhotoPage";


export default function BikeSlider({cardToShow,setOverflow}){

const [displayPhoto , setDisplayPhoto] = useState('none');
const [choosenPhoto,setChoosenPhoto] = useState('');

const handleOpenPhoto = (sourse) => {
 setDisplayPhoto('flex');
 setChoosenPhoto(sourse)
 setOverflow('hidden');
}


    return(
<>
<PhotoPage displayPhoto ={displayPhoto} setDisplayPhoto={setDisplayPhoto} choosenPhoto={choosenPhoto} setOverflow={setOverflow} />
<Carousel showArrows={true} className="carousel-divs">
        {cardToShow.img.map((imageSrc, index) => (
          <div key={index} className="car-div-img" onClick={()=>handleOpenPhoto(imageSrc)}>
            <img className="info_img" src={imageSrc} alt="" />
          </div>
        ))}
      </Carousel>
</>
    )
}