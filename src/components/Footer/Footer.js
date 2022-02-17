import { Link } from 'react-router-dom';
import './styles.scss';

import FacebookIcon from './assets/facebook.png';
import TwitterIcon from './assets/twitter.png';
import InstagramIcon from './assets/instagram.png';
import PinterestIcon from './assets/pinterest.png';

import Group from './assets/Group.png';

import PhoneIcon from './assets/phone.png';
import LocationIcon from './assets/location.png';
import ClockIcon from './assets/clock.png';
import MailIcon from './assets/mail.png';

const Footer = () => {
    return (
       <footer className='footer' data-test-id="footer">
           <div className='top-part'>
               <div className='footer-wraper top'>
                    <span className='footer-title'>BE IN TOUCH WITH US:</span>
                    <div className='input-block'>
                        <input type='email' className='footer-input' placeholder='Enter your email'></input>
                        <button className='footer-button'>JOIN US</button>
                    </div>
                    <div className="social">
                        <a href="/">
                            <img src={FacebookIcon} className="icon social" alt="facebook-icon" />
                        </a>
                        <a href="/">
                            <img src={TwitterIcon} className="icon social" alt="facebook-icon" />
                        </a>
                        <a href="/">
                            <img src={InstagramIcon} className="icon social" alt="instagram-icon" />
                        </a>
                        <a href="/">
                            <img src={PinterestIcon} className="icon social" alt="pinterest-icon" />
                        </a>
                    </div>
               </div>
           </div>
           <div className='middle-part'>
                <div className='footer-wraper middle'>
                    <div className='categories'>
                        <span className='catrgories-title'>Categories</span>
                        <ul>
                            <li>
                                <Link to='/men' data-test-id="footer-nav-link-men">
                                    Men
                                </Link>
                            </li>
                            <li>
                                <Link to='/women' data-test-id="footer-nav-link-women">
                                    Women
                                </Link></li>
                            <li><a href="/">Accessories</a></li>
                            <li><a href="/">Beauty</a></li>
                        </ul>
                    </div>
                    <div className='categories'>
                        <span className='catrgories-title'>Infomation</span>
                        <ul>
                            <li><a href="/">Contact Us</a></li>
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">FAQs</a></li>
                        </ul>
                    </div>
                    <div className='categories'>
                        <span className='catrgories-title'>Useful links</span>
                        <ul>
                            <li><a href="/">Terms & Conditions</a></li>
                            <li><a href="/">Returns & Exchanges</a></li>
                            <li><a href="/">Shipping & Delivery</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                        </ul>                   
                    </div>
                    <nav id='contact' className='categories'>
                        <span className='catrgories-title'>CONTACT US</span>
                        <ul>
                            <li>
                                <Link to='/' data-test-id="footer-nav-link-">
                                    <img src={LocationIcon} className="location" alt="Location-Icon" />
                                    <span>Belarus, Gomel, Lange 17</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/' data-test-id="footer-nav-link-">
                                    <img src={PhoneIcon} className="phone" alt="Phone-Icon" />
                                    <span>+375 29 100 20 30</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/' data-test-id="footer-nav-link-">
                                    <img src={ClockIcon} className="clock" alt="Clock-Icon" />
                                    <span>All week 24/7</span>
                                </Link>
                            </li>
                            <li className="email">
                                <Link to='/' data-test-id="footer-nav-link-">
                                    <img src={MailIcon} className="mail" alt="Mail-Icon" />
                                    <span>info@clevertec.ru</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
           </div>
           <div className='bottom-part'>
                <div className='footer-wraper bottom'>
                    <span className="copyright">
                        Copyright © 2032 all rights reserved
                    </span>
                    <img className="group" src={Group} alt="group"/>
                    <a href="Clevertec.ru/training" className="pr-link">
                        Clevertec.ru/training
                    </a>
                </div>
           </div>
       </footer>
    );
};

export default Footer;