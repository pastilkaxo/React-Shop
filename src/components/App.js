import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import { Bikes } from "./AllData";


function App (){
  const [display,setDisplay] = useState('none');
  const [cart,setCart] = useState([]);
  const [added,setAdded] = useState([]); // !
  const [favorite,setFavorite] = useState([])
  const [bikes,setBikes] = useState(Bikes); // !
  const [showMainContent, setShowMainContent] = useState(true); 
  const [displayFavContainer, setDisplayFavContainer] = useState(true);
  

const toggleFavContainer = () => {
  setDisplayFavContainer(!displayFavContainer);
};

  const toggleMainContent = () => {
    setShowMainContent(!showMainContent);
  };

  const addToCart = (bike) => {
          setCart((prev) => ([...prev,bike]))
        }

  const addFavBtn = (bike) => {
       setFavorite((prev) => ([...prev,bike]) )  
        // add and del heaart
  }

  const delFromCart = (id) => {
         setCart((prevCart) => {
                const idx = prevCart.findIndex((bike) => bike.id === id);
                if(idx !== -1){
                  const newArray = [...prevCart.slice(0,idx),...prevCart.slice(idx+1)];
                  return newArray;
                }
                   return prevCart;
         })    
  }
 const delFavItem = (id) => {
  setFavorite((prevFav) => {
    const idx = prevFav.findIndex((bike) => bike.id === id);
    if(idx !== -1){
      const newFavArray = [...prevFav.slice(0,idx),...prevFav.slice(idx+1)];
      return newFavArray;
    }
       return prevFav;
}) 
 }
  
  const displayBlock = () =>  {
          setDisplay('block');
  }
  const displayNone = () => {
     setDisplay('none');
  }

  
return(
  <div className="app-body">
     <div className="overlay" style={{display:display}}>
     <Cart bikes={cart}  displayNone={displayNone} delFromCart={delFromCart}/>
     </div>
    <Header toggleFavContainer={toggleFavContainer} displayChange={displayBlock} displayMain={toggleMainContent} bikes={cart} added={favorite} />
    <Main displayMain={toggleMainContent} toggleFavContainer={toggleFavContainer} 
    showMainContent={showMainContent}  displayFavContainer={displayFavContainer} 
    bikes={bikes} added={added} addToCart={addToCart} addFavBtn={addFavBtn} 
    favorite={favorite} delFavItem={delFavItem}/>
    <Footer/>
  </div>
)
}
export default App;