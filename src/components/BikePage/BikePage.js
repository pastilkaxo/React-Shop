import  {Link} from "react-router-dom";
import {useParams} from "react-router-dom";   // ID из URL
import React from "react";
import  './style/BikePage.css';
import {useSnackbar} from "notistack";

export  default  function BikePage({bikes , added , addToCart}){
   const {id} = useParams()
    const bikeID = Number(id);
    const cardToShow = bikes.find((item) => item.id === bikeID);

    const { enqueueSnackbar } = useSnackbar();

    const handleClickVariant = (variant) => () => {
        enqueueSnackbar('Bike added!',{
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
                  <div className="add_but" onClick={() => addToCart(cardToShow)}>
                      <button className="cart_bt" onClick={handleClickVariant('success')}><p>Add to cart</p></button>
                  </div>

           </div>
       </div>
       <Link to="/" className="link_back"><button className="go-back"><img className='info-img' src='/img/go-back.png' alt=''/><p className='back-sum'>Back</p></button></Link>
   </>
   )
}