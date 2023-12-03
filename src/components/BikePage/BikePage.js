import  {Link} from "react-router-dom";
import {useParams} from "react-router-dom";   // ID из URL
import React,{useState,useEffect} from "react";
import  './style/BikePage.css';
import {useSnackbar} from "notistack";
import Textarea from '@mui/joy/Textarea';

export  default  function BikePage({bikes , added , addToCart,addFavBtn,favorite}){

    const [bikeFillColors, setBikeFillColors] = useState(bikes.map(() => "black"));


    useEffect(() => {
        const updFill = bikes.map((bike) => 
         favorite.some((favBike) => favBike.id === bike.id) ? "pink" : "black" 
        );
        setBikeFillColors(updFill);

        
},[bikes,favorite])


   const {id} = useParams()
    const bikeID = Number(id);
    const cardToShow = bikes.find((item) => item.id === bikeID);

    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant) => () => {

        const varCheck = `Item ${added ? 'removed' : 'added'}!`
        enqueueSnackbar(  varCheck,{
          variant ,
          // ContentProps: {
          //   className: 'custom-snackbar'
          // },
          autoHideDuration:1500,
        });
      };


      


   return(
   <>
       <h1 className="info_sum">Item info:</h1>

       <div className="bike_container">
           <img className="info_img" src={cardToShow.img} width="500" height="350" alt="" />
           <div>
               <h2 className="inner_info_sum">  {cardToShow.name} </h2>
               <p>Cost: {cardToShow.cost} $</p>
                  <div className="btns-container">
                  <div className="add_but" onClick={() => addToCart(cardToShow)}>
                      <button className="cart_bt" onClick={handleClickVariant(added ? 'error' : 'success')}><p>{added ? `Delete` : "Add"}</p></button>
                  </div>
                  <svg onClick={() => { addFavBtn(cardToShow);}} className="bp-fav" focusable="false" 
                                      aria-hidden="true" viewBox="0 0 24 24"
                                       data-testid="FavoriteBorderIcon"  fill={bikeFillColors[cardToShow.id - 1]}>
                                      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                    </svg>
                  </div>
           </div>
       </div>
       <div className="comments-container">
       <h2>Reviews</h2>
        <div className="type-container">
        <Textarea
        className="new-text"
  minRows={2}
/>
          <button >Send</button>
        </div>
        <div className="total-comments">
        </div>
       </div>
       <div className="link-container">
       <Link to="/" className="link_back"><button className="go-back"><img className='info-img' src='/img/go-back.png' alt=''/><p className='back-sum'>Back</p></button></Link>
       </div>
   </>
   )
}