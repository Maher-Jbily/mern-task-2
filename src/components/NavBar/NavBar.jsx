import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope , faCalendar,faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css'
import { useState } from 'react';
import {Link} from "react-router-dom"
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const openPanel = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);
  return (
    <nav>
        <div className='d-p-1'>
            <span className='f-s-p-0'>
                <span className='f-s-p-1'>
                    <FontAwesomeIcon icon={faEnvelope } className='NavIcon1'  />
                    <a href="#" className='NavLink'>info@company.com</a>
                </span>
                <span className='f-s-p-2'>
                    <FontAwesomeIcon icon={faEnvelope }  className='NavIcon1'/>
                    <a href="" className='NavLink'>Sunny Isles Beach, Fl 33160</a>
                </span>
            </span>
            <span className='f-s-p-3'>
                <a href=""><FontAwesomeIcon icon={faFacebook} className='NavIcon2'/></a>
                <a href=""><FontAwesomeIcon icon={faTwitter }  className='NavIcon2'/></a>
                <a href=""><FontAwesomeIcon icon={faLinkedin }  className='NavIcon2'/></a>
                <a href=""><FontAwesomeIcon icon={faInstagram} className='NavIcon2' /></a>
            </span>
        </div>
        <div className='d-p-2'>
            <h1 className='nav-h1'>VILLA</h1>
            <span className='d-2-s1'>
                <ul className='nav-list'>
                    <li><Link to="/mern-task-2/">Home</Link></li>
                    <li><Link to="/mern-task-2/properties">Properties</Link></li>
                    <li><Link to="/mern-task-2/singleProperty">Property Details</Link></li>
                    <li><Link to="/mern-task-2/contact">Contact Us</Link></li>
                </ul>
                <button className='last-n-button'><FontAwesomeIcon icon={faCalendar } className='iconNavButton' />Schedule a visit</button>
            </span>
            <button className='menu-button' onClick={openPanel}>
                <FontAwesomeIcon icon={faBars}/>
            </button>
            <div className={`side-panel ${isOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closePanel}>×</button>
                <ul className='side-p-li'>
                    <li><a href="">Home</a></li>
                    <li><a href="">Property Details</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <button className='last-n-button'><FontAwesomeIcon icon={faCalendar } className='iconNavButton' />Schedule a visit</button>
            </div>
        </div>
        </nav>
  )
}

