import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import BikesData  from "./AllData.json";
import { SnackbarProvider } from "notistack";
import Login from "./Accout/Login";
import {BrowserRouter as Router,  Route, Routes} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCart, setFavorite } from "./Redux/Store";
import BikePage from "./BikePage/BikePage";
import ErrorTab from "./404/404";

function App (){
  const [display,setDisplay] = useState('none');
  // const [cart,setCart] = useState([]);
  // const [favorite,setFavorite] = useState([])
  const [bikes,setBikes] = useState(BikesData); 
  const [added , setAdded] = useState(false);
  const [showMainContent, setShowMainContent] = useState(true); 
  const [displayFavContainer, setDisplayFavContainer] = useState(true);
  const [boughtItems, setBoughtItems] = useState([]);
  const [overFlow , setOverflow] = useState('auto')

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.reducer.cart);
  const favorite = useSelector((state) => state.reducer.favorite)
  const isAuthorized = useSelector((state) => state.user.isAuthorized);
 //  FILTER CATEGORIES ARRAYS :


 
 const handleCategoryChange = (category) => {
  let  jsonData  = require("./AllData.json"); 
  switch(category) {
    case "Bikes":
      jsonData = jsonData.filter(bike => bike.name.toLowerCase().includes('bike')).sort((a , b) => a.id - b.id);
      setBikes(jsonData)
      break;
    case "Rudders":
      jsonData = jsonData.filter(bike => bike.name.toLowerCase().includes('rudder')).sort((a,b) => a.id - b.id);
      setBikes(jsonData)
      console.log(jsonData)
      break;
    case "Frames":
      jsonData = jsonData.filter(bike => bike.name.toLowerCase().includes('frame')).sort((a , b) => a.id - b.id);
      setBikes(jsonData)
      break;
    default:
      jsonData  = require("./AllData.json");
      setBikes(jsonData);
      break;
  }

} 


 // -----------------------
 


 const toggleFavContainer = () => {
  setDisplayFavContainer(!displayFavContainer);
};

  const toggleMainContent = () => {
    setShowMainContent(!showMainContent);
  };

  // const addToCart = (bike) => {
  //         setCart((prev) => ([...prev,bike]))
  //       }


  const clearCart = () => {
    dispatch(setCart([]))
  }
  const clearFav = () => {
    dispatch(setFavorite([]))
  }

  const addToBuys = () => {
   if(isAuthorized){
    cart.forEach((bike) => {
      setBoughtItems((prevItems) => [...prevItems,bike])
  });
  dispatch(setCart([]))
   }
   else{
    console.log("ERR")
   }
  }


  const addFavBtn = (bike) => {
       const isAlreadyFav = favorite.some((favBike) => favBike.id === bike.id);
       if(isAlreadyFav){
        delFavItem(bike.id);
       }
       else {
    // setFavorite((prev) => ([...prev,bike]) )
    dispatch(setFavorite([...favorite,bike]))

       }
  }

  const addToCart = (bike) => {
    const isAlreadyInCart = cart.some((cartBike) => cartBike.id === bike.id)
    if(!cart.filter(bike => bike.name.toLowerCase().includes(bike.name))){
      setAdded(false)
    }
    else { setAdded(true) }
    if(isAlreadyInCart){
      delFromCart(bike.id);
    }
    else {
    dispatch(setCart([...cart, bike]));
    }
  }


  // const delFromCart = (id) => {
  //        setCart((prevCart) => {
  //               const idx = prevCart.findIndex((bike) => bike.id === id);
  //               if(idx !== -1){
  //                 const newArray = [...prevCart.slice(0,idx),...prevCart.slice(idx+1)];
  //                 return newArray;
  //               }
  //                  return prevCart;
  //        })    
  // }

  const delFromCart = (id) => {
    const idx = cart.findIndex((bike) => bike.id === id);
    if (idx !== -1) {
      const newArray = [...cart.slice(0, idx), ...cart.slice(idx + 1)];
      dispatch(setCart(newArray)); 
      setAdded(false);
    }
  }
// --------------------------
  
 const delFavItem = (id) => {
  // setFavorite((prevFav) => {
    const idx = favorite.findIndex((bike) => bike.id === id);
    if(idx !== -1){
      const newFavArray = [...favorite.slice(0,idx),...favorite.slice(idx+1)];
      // return newFavArray;
      dispatch(setFavorite(newFavArray))
    }
    
// }) 
 }


  const displayBlock = () =>  {
          setDisplay('block');
          setOverflow('hidden');
  }
  const displayNone = () => {
     setDisplay('none');
     setOverflow('auto');
      
  }
  document.documentElement.style.overflow = overFlow
// -----------------------------------------|
const headerProps = {
  toggleFavContainer:toggleFavContainer,
   displayChange:displayBlock ,
   displayMain:toggleMainContent,
   bikes:cart,
    added:favorite,
}

const cartProps = {
  bikes:cart,
  displayNone:displayNone,
  delFromCart:delFromCart,
  clearCart:clearCart,
    addToBuys :addToBuys,
    
}

const mainProps = {
  displayMain: toggleMainContent,
  toggleFavContainer: toggleFavContainer,
  showMainContent: showMainContent,
  displayFavContainer: displayFavContainer,
  bikes: bikes,
  addToCart: addToCart,
  addFavBtn: addFavBtn,
  favorite: favorite,
  delFavItem: delFavItem,
  handleCategoryChange: handleCategoryChange,
  cart:cart,
  added:added,
  clearFav:clearFav,
};

const loginProps = {
  bikes: bikes,
    boughtItems: boughtItems,
    clearFav:clearFav,
    clearCart:clearCart,
    setBoughtItems:setBoughtItems,
}

const bikeProps = {
    bikes:bikes,
    addToCart:addToCart,
    added:added,
    addFavBtn: addFavBtn,
    favorite: favorite,
    setOverflow:setOverflow,
  
}


return(
<Router>
  <div className="app-body">
    <div className="overlay" style={{ display: display }}>
      <Cart {...cartProps} />
    </div>
    <Routes>
      <Route path="/login" element={<Login {...loginProps}/>} />
        <Route path="/bikePage/:id" element={ <SnackbarProvider maxSnack={3}> <BikePage {...bikeProps}/> </SnackbarProvider>} />
      <Route path="/" element={<>
        <Header {...headerProps} />
        <SnackbarProvider maxSnack={3}>
          <Main {...mainProps} />
        </SnackbarProvider>
        <Footer />
      </>} />
       <Route path="/*" element={<ErrorTab/>}/>
    </Routes>
  </div>
</Router>
)
}
export default App;