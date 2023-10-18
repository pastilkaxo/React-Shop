import  {Link} from "react-router-dom";
import {useParams} from "react-router-dom";   // ID из URL
import React from "react";

export  default  function BikePage({bikes}){
   const {id} = useParams()
    const bikeID = Number(id);
    const cardToShow = bikes.find((item) => item.id === bikeID);
   return(
       <div>
           <h1>Bike info:</h1>
               <p>Name {cardToShow.name}</p>
               <p>Cost: {cardToShow.cost}</p>
           <Link to="/"><p>Back</p></Link>
       </div>
   )
}