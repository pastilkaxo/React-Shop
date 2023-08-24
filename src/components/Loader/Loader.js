import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Favorit from '../Favorite/Favorite';
import './style/Loader.css'

export default function Loader({favorite,displayFavContainer, delFavItem, 
   added ,addToCart, toggleFavContainer,displayMain}) {
const [isLoading ,setIsLoading] = useState(true);

 useEffect(
    () => {
        setTimeout(()=> {
            setIsLoading(false)
        },5000)
    },[]
 );
 if(isLoading){
     return(
        <div className={displayFavContainer ? 'load-container hidden': 'load-container' }>
        <CircularProgress />
        </div>
     )
 }



return(
   <div className={displayFavContainer ? 'new-fav-container hidden' : 'new-fav-container' } >
      <Favorit toggleFavContainer={toggleFavContainer} favorite={favorite}
       delFavItem={delFavItem} added={added} addToCart={addToCart}
       displayMain={displayMain}/>
   </div>
)

}