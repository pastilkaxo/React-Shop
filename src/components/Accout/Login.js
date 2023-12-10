import './style/Login.css';
import styles from "./style/User.module.css";
import { EditText,EditTextarea  } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
import { Link } from "react-router-dom";
import React, {useRef, useState , useEffect} from 'react';
import { useSnackbar } from "notistack";
import UserEditor from '../UserEditor/UserEditor';
import UploadAvatar from './UpploadAvatar';
import { 
    authorize,
    unauthorize,
    setName,
    setEmail,
    setPassword
} from '../Redux/Store';
import { useDispatch, useSelector } from "react-redux";

export default function Login({boughtItems,clearFav,clearCart,setBoughtItems}){
    const dispatch = useDispatch();
    const userName = useSelector((state) => state.user.userName);
    const userEmail = useSelector((state) => state.user.userEmail);
    const userPassword = useSelector((state) => state.user.userPassword); 
    const userAvaatr = useSelector((state) => state.user.userAvatar); 
    const isAuthorized = useSelector((state) => state.user.isAuthorized);
    const [logType, setLogType] = useState(true);
    const [typeName ,setTypeName] = useState('Register');
    const [displayInput,setDisplayInput] = useState('none')
    const [displayNameBlock , setDisplayNameBlock] = useState('flex')
    const { enqueueSnackbar } = useSnackbar();
    
    
    const usernameRef = useRef("");
    const emailRef = useRef("");
    const passRef = useRef("");
    const recoverPassRef = useRef("");
    
    const handleSubmit = () => {
        if(usernameRef.current.value && passRef.current.value && recoverPassRef.current.value !== null){
      dispatch(authorize(true))
            dispatch(setName(usernameRef.current.value))
            if(logType){
                dispatch(setEmail('vlad.lemeshok@gmail.com'))
            }
            else {
                dispatch(setEmail(emailRef.current.value))
            }
            dispatch(setPassword(passRef.current.value))
        }
        else {
            enqueueSnackbar("Please enter email correct!", {
                variant: "error",
                autoHideDuration: 1500,
              });
              return; 
        }
            
    }


    const handleLogout = () => {
        dispatch(unauthorize())
        clearCart()
        clearFav()
        setBoughtItems([]);
    };
    
    const handleEditName = (name) => {
        dispatch(setName(name.current.value))
        setDisplayInput('none')
        setDisplayNameBlock('flex')
    }
    const handleShowEditor = () => {
        setDisplayInput('block');
        setDisplayNameBlock('none')
    }





   if(isAuthorized) {
       return (
           <>
               <div className="header">
                   <div className="logo">
                       <img src="./img/logo.png" alt=""/>
                       <span className="summury">
                      <p>BM SHOP<small>BMX BIKE STORE</small></p>
                      </span>
                   </div>

               </div>
               <div className={styles.user_profile}>
                <UploadAvatar/>
                   <div className={styles.user_profile_data}>
                       <h2>Username:<br/>
                      <UserEditor handleEditName={handleEditName} 
                      usernameRef={usernameRef}
                      displayInput={displayInput}
                      />
                       </h2>
                       <div className='user-name-block' style={{display:displayNameBlock}}>
                       <span>{userName} </span>
                       <img src='./img/nameEdit.svg'
                       onClick={() => handleShowEditor()}
                       className='name-edit' alt=' '/>
                       </div>
                       <p>Email: <br/> {userEmail}</p>
                       <div className={styles.user_profile_data_buttons}>
                           <Link to="/"><button >Back to main</button></Link>
                           <button onClick={handleLogout} className='logout-btn'>Logout</button>
                       </div>

                   </div>
               </div>
               {boughtItems.length !== 0 ? <h2 className={styles.if_bought}>Purshases:</h2> : <></>}
               <div className={styles.purss_items}>

                   {boughtItems.length === 0 ? <div className={styles.nth_bought}> <img src="./img/favorite.png"/> <h2>Nothing bought.</h2> </div>  :
                       boughtItems.map((bike) => (

                               <div className='cartItem' key={bike.id}>
                                   <img  src={bike.img[0]} alt='' />

                                   <div>
                                       <Link to={`/bikePage/${bike.id}`} className="bike_link_info">
                                           <p>{bike.name}</p> </Link> <small>{bike.cost}$</small>

                                   </div>

                               </div>

                           ))
                   }
               </div>

           </>
       );
   }


   const changeLogType = () => {
    setLogType(!logType);
    setTypeName(logType ? 'Login' : 'Register');
  };



  


return(
<>
{
    logType ?  
    <div className="login-container">
    <div className='stroke-back'><Link to="/" className="go-back-link"><img className='empty-btn-img' src='./img/go-back.png' alt=''/><p className='back-sum'>Back</p></Link> </div>

    <div className="login-form">
            <div className='log-choose'>
            <h2>Login</h2>
            <div className='register-choose'>
          <button onClick={changeLogType}>{typeName}</button>
        </div>
            </div>
        <form>
            <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input ref={usernameRef}  type="text" id="username" name="username" placeholder="Enter your username" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input ref={passRef} type="password" id="password" name="password" placeholder="Password" required/>
            </div>

            <button type="submit" onClick={handleSubmit}>Confirm</button>
        </form>
    </div>
</div>
:
<div className="login-container">
<div className='stroke-back'><Link to="/" className="go-back-link"><img className='empty-btn-img' src='./img/go-back.png' alt=''/><p className='back-sum'>Back</p></Link> </div>
<div className='register-choose'>
      <button onClick={changeLogType}>{typeName}</button>
    </div>
<div className="login-form">
        <div className='log-choose'>
        <h2>REGISTER</h2>
        <div className='register-choose'>
      <button onClick={changeLogType}>{typeName}</button>
    </div>
        </div>
    <form>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input ref={usernameRef}  type="text" id="username" name="username" placeholder="Enter your username" required/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input ref={emailRef}  type="email" id="email" name="email" placeholder="Enter email" required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input ref={passRef} type="password" id="password" name="password" placeholder="Password" required/>
        </div>
        <div className="form-group">
            <label htmlFor="confirm-password">Confirm password:</label>
            <input ref={recoverPassRef} type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" required/>
        </div>
        <button type="submit" onClick={handleSubmit}>Confirm</button>
    </form>
</div>
</div>

}
</>
)
}