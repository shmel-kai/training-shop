import { useNavigate } from 'react-router-dom';

import { Link } from 'react-router-dom';

import PhoneIcon from './icons/phone.png';
import LocationIcon from './icons/location.png';
import ClockIcon from './icons/clock.png';
import FacebookIcon from './icons/facebook.png';
import TwitterIcon from './icons/twitter.png';
import InstagramIcon from './icons/instagram.png';
import PinterestIcon from './icons/pinterest.png';
import Logo from './icons/CleverShop.svg';
import Bag from './icons/bag.png';
import Search from './icons/search.png';
import Globe from './icons/globe.png';
import User from './icons/user.png';


import './styles.scss';

const Header = (props1) => {
    const navigateFunc = useNavigate();
    const onClickCallback = (event) => {
        event.preventDefault(); // отменяет дефолтное поведение при клике
        navigateFunc('/about');
    };

    return (
        <header className="header" data-test-id="header">
            <div className="info-container">
                <div className="info">
                    <div className="contacts">
                        <div className="phone-container">
                            <img src={PhoneIcon} className="icon" alt="phone-icon" />
                            <a href="tel:375291002030" className="link" onClick={onClickCallback}>
                                +375 29 100 20 30
                            </a>
                        </div>
                        <div className="address-container">
                            <img src={LocationIcon} className="icon" alt="location-icon" />
                            <span className="address">
                                Belarus, Gomel, Lange 17
                            </span>
                        </div>
                        <div className="work-time-container">
                            <img src={ClockIcon} className="icon" alt="clock-icon" />
                            <span className="time">
                                All week 24/7
                            </span>
                        </div>
                    </div>
                    <div className="soc">
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
            <div className="menu-container">
                <div className="logo">
                    <Link to='/' data-test-id="header-logo-link">
                        <img src={Logo} className="img-logo" alt="CleverShop" />
                    </Link>
                </div>
                <nav className="menu" data-test-id="menu">
                    <ul>
                        <li><Link to='/' data-test-id="menu-link-">About us</Link></li>
                        <li><Link to='/women' data-test-id="menu-link-women">Women</Link></li>
                        <li><Link to='/men' data-test-id="menu-link-men">Men</Link></li>
                        <li><Link to='/' data-test-id="menu-link-">Beauty</Link></li>
                        <li><Link to='/' data-test-id="menu-link-">Accessories</Link></li>
                        <li><Link to='/' data-test-id="menu-link-">Blog</Link></li>
                        <li><Link to='/' data-test-id="menu-link-">Contact</Link></li>
                    </ul>
                </nav>
                <div className="self-navigation">
                    <button className="button"> <img src={Search} className="img-button" alt="Search"/></button>
                    <button className="button"> <img src={Globe} className="img-button" alt="Globe"/></button>
                    <button className="button"> <img src={User} className="img-button" alt="User"/></button>
                    <button className="button"> <img src={Bag} className="img-button" alt="Bag"/></button>
                </div>
            </div>
        </header>
    );
};
 
// function Header () {
//     return <h1>I'm header component</h1>;
// }

export default Header;