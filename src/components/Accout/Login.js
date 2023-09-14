import './style/Login.css'
import { Link } from "react-router-dom";

export default function Login(){
return(
    <div className="login-container">
    <div className='stroke-back'><Link to="/" className="go-back-link"><img className='empty-btn-img' src='./img/go-back.png' alt=''/><p className='back-sum'>Back</p></Link> </div>
    <div className="login-form">
        <h2>Register</h2>
        <form>
            <div className="form-group">
                <label for="username">User name:</label>
                <input type="text" id="username" name="username" placeholder="Enter your username" required/>
            </div>
            <div className="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter email" required/>
            </div>
            <div className="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Password" required/>
            </div>
            <div className="form-group">
                <label for="confirm-password">Confirm password:</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirm password" required/>
            </div>
            <button type="submit">Confirm</button>
        </form>
    </div>
</div>

)
}