import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="Navbar">
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>

            <div className={`Navmenu ${isOpen ? "nav-active" : ""}`}>
                <div className="Navitem">
                    <img className="Navicon" src="/icons/home.png" alt="Home"/>
                    <p className="Navnames">Home</p>
                </div>
                <div className="Navitem">
                    <img className="Navicon" src="/icons/people.png" alt="Find the Mediator"/>
                    <p className="Navnames">Find the Mediator</p>
                </div>
                <div className="Navitem">
                    <img className="Navicon" src="/icons/meeting.png" alt="Community Forum"/>
                    <p className="Navnames">Community Forum</p>
                </div>
                <div className="Navitem">
                    <img className="Navicon" src="/icons/manual.png" alt="How It Works"/>
                    <p className="Navnames">How It Works</p>
                </div>
                <div className="Navitem">
                    <img className="Navicon" src="/icons/info.png" alt="About Us"/>
                    <p className="Navnames">About Us</p>
                </div>
                <div className="Navitem">
                    <img className="Navicon" src="/icons/call.png" alt="Support/Help"/>
                    <p className="Navnames">Support/Help</p>
                </div>
            </div>
        </div>
    );
}

export default Navbar;