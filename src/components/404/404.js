import React from "react"
import { Link } from "react-router-dom"
import "./style/404.css"
import Logo from "../Logo/Logo"
export default function ErrorTab() {
    return(
<div className="wrapper">
<div className="err-head">
<Logo/>
          </div>
        <div className="error-container">
 <div className="error-content">
<img className="err-img" src="./img/404.svg"/>
<div className="error-btns">
    <Link to="/" className="err-link">
    <button className="go-back"><img className='info-img' src='/img/go-back.png' alt=''/><p className='back-sum' href="#">Back</p></button>    </Link>
</div>
 </div>
        </div>
</div>
    )
}