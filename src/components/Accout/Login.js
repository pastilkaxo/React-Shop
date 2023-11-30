import './style/Login.css';
import styles from "./style/User.module.css";
import { Link } from "react-router-dom";
import React, {useRef, useState , useEffect} from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';

export default function Login({boughtItems}){
    const [userName, saveUserName] = useLocalStorage("userName");
    const [email, saveEmail] = useLocalStorage('email');
    const [password, savePassword] = useLocalStorage('password');
    const [isRegistered, setIsRegistered] = useLocalStorage('isRegistered', false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const usernameRef = useRef("");
    const emailRef = useRef("");
    const passRef = useRef("");
    const recoverPassRef = useRef("")
    const usersInfo = [];

    const handleSubmit = (e) => {
      e.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passRef.current.value;
        const recPass = recoverPassRef.current.value;
      console.log(username , email , password)

        if (!username|| !email || !password || password !== recPass) {
            return alert("Please fill in all fields.");
        }
      saveUserName(username);
      saveEmail(email);
      savePassword(password)
      setIsLoggedIn(true);
        setIsRegistered(true);

        usersInfo.push({username,email,password})
        console.log(usersInfo)

    }
    const handleLogout = () => {
            saveUserName('');
            saveEmail('');
            savePassword('');
            setIsRegistered(false);
            setIsLoggedIn(false);
    };


    useEffect(() => {

        if (isRegistered && userName && email && password === recoverPassRef.current.value && password !== "") {
            setIsRegistered(true)
            setIsLoggedIn(true)
        }
        else {
            setIsRegistered(false)
            setIsLoggedIn(false)
        }
    }, []);


    let tab = [];
        tab.push(
            <div>
                { userName === "Vlad" ? <img className={styles.user_profile_img}   src="./img/avatar1.png" alt="Vlad"/> : <img  className={styles.user_profile_img} src="./img/avatar2.jpg" alt=" "/>}
            </div>
        )




   if(isLoggedIn) {
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
                   {tab}
                   <div className={styles.user_profile_data}>
                       <h2>Username:<br/> {userName}</h2>
                       <p>Email: <br/> {email}</p>
                       <div className={styles.user_profile_data_buttons}>
                           <button onClick={handleLogout}>Logout</button>
                       </div>

                   </div>
               </div>
               {boughtItems.length !== 0 ? <h2 className={styles.if_bought}>Purshases:</h2> : <></>}
               <div className={styles.purss_items}>

                   {boughtItems.length === 0 ? <div className={styles.nth_bought}> <img src="./img/favorite.png"/> <h2>Nothing bought.</h2> </div>  :
                       boughtItems.map((bike) => (

                               <div className='cartItem' key={bike.id}>
                                   <img  src={bike.img} alt='' />

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






return(
    <div className="login-container">
    <div className='stroke-back'><Link to="/" className="go-back-link"><img className='empty-btn-img' src='./img/go-back.png' alt=''/><p className='back-sum'>Back</p></Link> </div>
    <div className="login-form">
        <h2>Login</h2>
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

)
}