import "./style/Favorit.css"
import React, {useState} from "react"
import {Link} from "react-router-dom";

export default function Favorit({favorite,delFavItem,added ,addToCart,toggleFavContainer,
  displayMain,bikeFillColors,  handleClickVariant,cartBtn , clearFav}) {
     
 const [svgClick,setSvgClick] = useState(false);
       
 const handleSvgClicked = () => {
       setSvgClick(svgClick);
       toggleFavContainer();
       displayMain();
 } 
   
     
    return(
        <div className="wrapper">
            <h1 className="fav-text" style={favorite.length === 0 ? {display:'none'} : {display:'flex'}}>Liked</h1>
              
             <div className="fav-container">
             <div className='fav-empty' style={favorite.length === 0 ? {display:'flex'} : {display:'none'}}>
                           <img src='./img/favorite.png' alt='empty-cart'/>
                           <p>Nothing liked</p>
                           <button onClick={handleSvgClicked}><img className='empty-btn-img' src='./img/go-back.png' alt=''/>Go back</button>
                     </div>
                 {favorite.map((bike) => (
                  <>
<div className="card" key={bike.id}>
<div className="bike-favorite">
<svg onClick={() => delFavItem(bike.id)} className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FavoriteBorderIcon"  fill={bikeFillColors[bike.id - 1]}>
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
    <img src= {`./img/${cartBtn[bike.id - 1]}`} alt="add" />
  </span>
</div>
</div>
</>
                 ))}
             </div>
             <div className="fav-cleaner" style={favorite.length === 0 ? {display:'none'} : {display:'flex'}}>
             <button onClick={handleSvgClicked} className='back-btn'><img className="back-btn-row"   src='./img/go-back.png' alt=''/>Go back</button>
             <button className="fav-clean-btn" onClick={clearFav}><img src='./img/trash.png' alt="clean"/></button>
             </div>
        </div>
    )
}