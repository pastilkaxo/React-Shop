import React, { useEffect, useState } from "react";
import './style/Main.css'
import { TextField } from "@mui/material";
import Categories from './Categories' 
import Loader from "../Loader/Loader";
import { useSnackbar } from 'notistack';
import  {Link} from "react-router-dom";
import VideoComponent from "../VideoComponent/VideoComponent";
import Summary from "../Summary/Summary";

const Main = ({ bikes,addToCart, addFavBtn , added,
  favorite,displayFavContainer, showMainContent , delFavItem ,
   toggleFavContainer , displayMain 
   , handleCategoryChange , selectedCategory,cart,clearFav}) => {


   const [searchResult, setSearchResult] = useState('');
   const [bikeFillColors, setBikeFillColors] = useState(bikes.map(() => "black"));
   const [cartBtn , setCartBtn] = useState(bikes.map(() =>'add.svg'));
   const { enqueueSnackbar } = useSnackbar();



useEffect(() => {
  const updBtn = bikes.map((bike) => (
    cart.find((cartBike) => cartBike.id === bike.id)) ? 'remove.svg'
    : 'add.svg'
    );
    setCartBtn(updBtn);
    console.log(updBtn)
},[bikes,cart])



  useEffect(() => {
           const updFill = bikes.map((bike) => 
            favorite.some((favBike) => favBike.id === bike.id) ? "pink" : "black" 
           );
           setBikeFillColors(updFill);
  },[bikes,favorite])

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

   // --------------------------------

   const loaderProps = {
    toggleFavContainer:toggleFavContainer,
    favorite:favorite,
    displayFavContainer:displayFavContainer,
    delFavItem:delFavItem,
    addToCart:addToCart ,
    added:added,
    displayMain:displayMain,
    bikeFillColors:bikeFillColors,
    handleClickVariant:handleClickVariant,
    cartBtn:cartBtn,
    clearFav:clearFav,
   }


  return (
    <main>
      <Loader {...loaderProps}/>

         {showMainContent &&
          <>
                  <Summary/>
                        <VideoComponent/>
          <Categories handleCategoryChange = {handleCategoryChange} selectedCategory={selectedCategory}/>
          <div className="search-panel">
        <h1>Find out:</h1>
        <TextField
          label="Search"
          InputProps={{
            type: 'search',
            onChange:(e) => setSearchResult(e.target.value.toLowerCase()),
          }} />
      </div><div className="all-content">
          {bikes
          .filter(bike => bike.name.toLowerCase().includes((searchResult)))
          .map((bike,index) => (
            <div className="card" key={bike.id}>
              <div className="bike-favorite">
                                      <svg onClick={() => { addFavBtn(bike);}} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" 
                                      aria-hidden="true" viewBox="0 0 24 24"
                                       data-testid="FavoriteBorderIcon"  fill={bikeFillColors[index]}>
                                      <path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                    </svg>

                <img src={bike.img[0]} alt="" />
              </div>
               <Link to={`./bikePage/${bike.id}`} className="bike_link_info">
                   <div className="card-info" >
                       <p className="item-name" >{bike.name}</p>
                   </div>
               </Link>
              <div className="add-tools">
                <span className="bike-cost">
                  <p><small>COST:</small>{bike.cost}$</p>
                </span>
                <span className="add-button" onClick={() => addToCart(bike)}>
                  <img src= {`./img/${cartBtn[index]}`} alt="add"/>
                </span>
              </div>
            </div>
          ))}
        </div>
        </>}

    </main>
  )
}

export default Main;
