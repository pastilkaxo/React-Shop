import './style/Login.css'
import { Link } from "react-router-dom";
import React, {useEffect, useRef} from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';


export default function Login(){
const [user , saveUser] = useLocalStorage("userName" , []);

// useEffect(() => {
//         localStorage  

// },[])


    const usernameRef = useRef(null); 
    const emailRef = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(`Username: ${usernameRef.current.value} \n Email: ${emailRef.current.value}`);
    };

return(
    <div className="login-container">
    <div className='stroke-back'><Link to="/" className="go-back-link"><img className='empty-btn-img' src='./img/go-back.png' alt=''/><p className='back-sum'>Back</p></Link> </div>
    <div className="login-form">
        <h2>Register</h2>
        <form>
            <div className="form-group">
                <label htmlFor="username">User name:</label>
                <input ref={usernameRef} type="text" id="username" name="username" placeholder="Enter your username" required/>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input ref={emailRef} type="email" id="email" name="email" placeholder="Enter email" required/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm password:</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" required/>
            </div>
            <button type="submit" onClick={handleSubmit}>Confirm</button>
        </form>
    </div>
</div>

)
}