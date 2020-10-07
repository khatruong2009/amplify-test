import React from 'react';
import {Link} from "react-scroll";

function Header () {
  return (
      <header id="header">
        <nav>
            <ul className="nav-menu">
              <li className="menu-active"><Link className="nav-link" to="intro" smooth={true} duration={1000}>Home</Link></li>
              <li><Link className="nav-link" to="about" smooth={true} duration={1000}>About</Link></li>
              <li><Link className="nav-link" to="schedule" smooth={true} duration={1000}>Agenda</Link></li>
              <li><Link className="nav-link" to="speakers" smooth={true} duration={1000}>Speakers</Link></li>
              <li><Link className="nav-link" to="sponsors" smooth={true} duration={1000}>Sponsors</Link></li>
              <li><Link className="nav-link" to="contact" smooth={true} duration={1000}>Contact</Link></li>
              <li><a className="nav-link" href="https://www.cg-la.com/privatemeetings">Private Meetings</a></li>
              <li><a className="nav-link" href="https://www.cg-la.com/store?category=GViP">Custom Services</a></li>
              <li className="buy-tickets"><a href="https://www.cg-la.com/store/global-registration-all-access">Register Now</a></li>
            </ul>
        </nav> {/*#nav-menu-container*/}
    </header> //End Header
  )
}

export default Header;