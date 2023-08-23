import React, { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import Cart from "./Cart/Cart";
import { Bikes } from "./AllData";


function App (){
  const [display,setDisplay] = useState('none');
  const [cart,setCart] = useState([]);
  const [added,setAdded] = useState('./img/add.svg');
  const [bikes,setBikes] = useState(Bikes);
  
  const addToCart = (bike) => {
          setCart((prev) => ([...prev,bike]))
        }
  const addBtnChange = () => {
     
    
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
    <Header displayChange={displayBlock} bikes={cart}/>
    <Main bikes={bikes} added={added} addToCart={addToCart} addBtnChange={addBtnChange}/>
    <Footer/>
  </div>
)
}
export default App;