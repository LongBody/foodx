import React from 'react';
import logo from './Images/logo.png';
import './footer.css';

const Footer = ()=> {
    return(
       <footer className="footer">
           <div className='footer__logo'>
           <img src={logo} alt="logo" className="logo"/>  {/*Change logo directory at import*/}
           </div>
           <div className='footer__details'>
           <p>Address: 5th Floor, SCIC Building, 16 Truong Dinh, Ward 6,  City. Ho Chi Minh City, Vietnam</p> {/* Change the details */}
            <p> Call center : 1900-1533</p>
            <p>Comment box: jbvnfeedback@jollibee.com.vn</p>
           </div>
           <div className="social-links">
           <h2>Contact Us</h2>
           <div className="contact-link">
           <li><a href="#"><ion-icon name="logo-facebook" class="facebook"></ion-icon></a></li>
          
          <li><a href="#"><ion-icon name="logo-instagram" class="instagram"></ion-icon></a></li>
          <li><a href="#"><ion-icon name="mail" class="mail"></ion-icon></a></li>
          </div>
           </div>
           
      </footer>
    )
}



export default Footer;