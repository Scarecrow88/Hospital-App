import { useState } from "react";
import '../css/navResponsiveContent.css';
export default function NavBar () {
    const [menuVisible, setMenuVisible] = useState (false);
    const toggleMenu = () => {
        setMenuVisible (!menuVisible);
    };
    return (
        <header className="navheader">
            <nav className="navbox">
                <a href="#" className="navlogo" aria-label="openmenu">Hospital <span class="navlogo2">App</span></a>
                <button 
                    className="navtoggle" 
                    aria-label={menuVisible ? "close menu" : "open menu"}
                    onClick={toggleMenu}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 
                        32 14.3 32 32s-14.3 32-32 32H32C14.3 
                        128 0 113.7 0 96zM0 256c0-17.7 
                        14.3-32 32-32H416c17.7 0 32 
                        14.3 32 32s-14.3 32-32 
                        32H32c-17.7 0-32-14.3-32-32zM448 
                        416c0 17.7-14.3 32-32 
                        32H32c-17.7 0-32-14.3-32-32s14.3-32 
                        32-32H416c17.7 0 32 14.3 32 
                        32z"/>
                    </svg>
                </button>
                <ul className={`navmenu ${menuVisible ? "navmenuvisible" : ""}`}>
                    <li class="navmenuitem">
                        <a href="#home">Home</a>
                    </li>
                    <li className="navmenuitem">
                        <a href="#services">Services</a>
                    </li>
                    <li className="navmenuitem">
                        <a href="#about">About</a>
                    </li>
                    <li className="navmenuitem">
                        <a href="#doctors">Doctors</a>
                    </li>
                    <li className="navmenuitem">
                        <a href="#book">Book</a>
                    </li>
                    <li class="navmenuitem">
                        <a href="#review">Review</a>
                    </li>
                    <li className="navmenuitem">
                        <a href="#">Blogs</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}