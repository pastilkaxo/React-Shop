import "./style/Footer.css"

export default function Footer(){
    return(
          <footer>
              <div className="foot-container">
                        <div className="logo">
                        <img src="./img/logo.png" alt=""/>
                        <span className="foot-summury">
                      <p>BM SHOP<small>BMX BIKE STORE</small></p>
                      </span>
                        </div>
                       <div className="main-info">
                               <p>+375 (25) 232-21-42</p>
                               <p>+375 (29) 123-41-23</p>
                               <p>New York, Queens</p>
                       </div>
                       <div className="main-links">
                              <ul>
                                 <li><a href="#"><img src="./img/icons8-телеграмма-app-50.png" alt=""/></a></li>
                                 <li><a href="#"><img src="./img/icons8-instagram-50.png" alt=""/></a></li>
                              </ul>
                       </div>
              </div>
          </footer>
    )
}