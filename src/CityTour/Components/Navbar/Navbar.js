import React from 'react';
import './Navbar.scss';
import logo from '../../img/logo.png';

export default function Navbar(){
    return(
        <nav className="navbar">
            <img src={logo} alt="Logo" className="logo" />
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link active" >
                        Home
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link" >
                        About
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link " >
                        Tour
                    </a>
                </li>
            </ul>
        </nav>
    )
        
}