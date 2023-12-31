import './style/Cart.css';
import { useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';


 function Cart({bikes,displayNone ,delFromCart,clearCart,addToBuys}){
   const isAuthorized = useSelector((state) => state.user.isAuthorized);
   const { enqueueSnackbar } = useSnackbar();

const alerterBuy = () => {
    if(!isAuthorized){
console.log("Error!")
       return;
    }

}

return(
    
           <div className='drawer'>
           <h2>Cart <span className='cart-closer' onClick={displayNone}>&times;</span></h2>
                     <div className='cart-empty' style={bikes.length === 0 ? {display:'flex'} : {display:'none'}}>
                           <img src='./img/empty-cart.png' alt='empty-cart'/>
                           <p>Cart is empty</p>
                           <button onClick={displayNone}><img className='empty-btn-img' src='./img/go-back.png' alt=''/>Go back</button>
                     </div>
                       <div className='items' >
                       {bikes.map((bike) => (
                            <div className='cartItem' key={bike.id}>
                            <img  src={bike.img[0]} alt='' />
                             <div>
                                <p>{bike.name}<small>{bike.cost}$</small></p>
                                
                             </div>
                          <img className='remover' src='/img/remove.svg' onClick={()=>{delFromCart(bike.id)}} alt=''/>
                         </div>
             ))}
                       </div>

                            <div className='cartTotalBlock' style={bikes.length === 0 ? {display:'none'} : {display:'block'}}>
                            <ul className='cart-foot'>
                        <li><span>For all </span><div></div><b>{bikes.reduce((total,element) => total + element.cost , 0)} $</b></li>
                        <li><span>Tax 5%</span><div></div><b>{Math.floor((bikes.reduce((total, element) => total + element.cost, 0) * 0.05))} $</b></li>
                       </ul>
                                <div className='cart-btns'>
                                <button className='greenBtn' onClick={addToBuys}>
                                       Make offer <img src='./img/arrow.png' alt=''/></button>
                      <button className='clear-btn' onClick={clearCart}><img src='./img/trash.png' alt='clean'/></button>
                                </div>
                            </div>
                  
           </div>
)
}

export default Cart;