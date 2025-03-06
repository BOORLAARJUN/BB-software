import React from "react";
import './Header.css';

function Header() {
    return (
        <div id="main">
            {/* Fixed Top Header */}
            <div className="Header1">
                <div id="HeaderLeft">
                    <div className="emblem">
                        <img id="emblem" src="/icons/emblem.png" alt="Emblem" />
                        <p className="text">Government of India</p>
                    </div>
                    <img className="icon" id="digindia" src="/icons/DigitalIndia.svg" alt="Digital India" />
                </div>
                <div id="HeaderRight">
                    <div id="lang">
                        <img className="icon" src="/icons/language.png" alt="Language" />
                        <p id="langtext">BHASHA</p>
                    </div>
                    <button id="login_button" >Login</button>
                </div>
            </div>

            {/* Search Section with Background Image */}
            <div id="Header2">
                <img className="icon" id="searchicon" src="/icons/search.png" alt="Search" />
                <input id="searchbar" type="text" name="search" placeholder="Search for mediators, forums, or guides..." />
            </div>
        </div>
    );
}

export default Header;
