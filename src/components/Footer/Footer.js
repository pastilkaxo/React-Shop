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
                       <div className="buyer-info">
                        <div>
                          <h3>For buyers</h3>
                          <a href="#">Shipping and payment</a>
                          <a href="#">Guarantees</a>
                          <a href="#">Loyalty system</a>
                          <a href="#">Shop</a>
                          <a href="#">Knitting needle calculator</a>
                        </div>
                        <div>
                          <h3>Information</h3>
                          <a href="#">Contacts</a>
                          <a href="#">Blog</a>
                          <a href="#">Privacy and Offers</a>
                          <a href="#">Policy</a>
                          <a href="#">Terms of use</a>
                          <a href="#">Vacancies</a>
                        </div>
                       </div>
                       <div className="main-info">
                               <p>+375 (25) 232-21-42</p>
                               <p>+375 (29) 123-41-23</p>
                               <p>New York, Queens</p>
                       </div>
                       <div className="main-links">
                              <ul>
                                <li><a href="#"><img src="./img/icons8-facebook.svg" alt=""/></a></li>
                                 <li><a href="#"><img src="./img/icons8-телеграмма-app-50.png" alt=""/></a></li>
                                 <li><a href="#"><img src="./img/icons8-instagram-50.png" alt=""/></a></li>
                              </ul>
                       </div>
              </div>
           <div className="rights">
            <h4> 
© 2023, BMShop, Inc. All rights reserved.
</h4>
           </div>
          </footer>
    )
}