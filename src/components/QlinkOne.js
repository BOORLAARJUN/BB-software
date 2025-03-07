import React from "react";
import "./QlinkOne.css";
function QlinkOne({title,links}){
    return(
        <div className="Qlink">
            <div className="Qlink_container">
                <h3 className="Qlinkheader">{title}</h3>
                <div className="links">
                {links.map((link, index) => (
                    <div className="link" key={index}>
                        <img className="linkimage" src={link.icon} alt={link.text} />
                        <p className="linktext">{link.text}</p>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}
export default QlinkOne;