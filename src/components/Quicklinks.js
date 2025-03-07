import React from "react";
import "./Quicklinks.css";
import QlinkOne from "./QlinkOne.js";
import Quicklinks_data from "./Quicklinks_data";
function Quicklinks(){
    return(
        <div id="Quicklink">
            <div className="Quicklinks1">
                <h2 id="header" >Quick Links</h2>
                <div id="block">
                {Quicklinks_data.map((section, index) => (
                <QlinkOne key={index} title={section.title} links={section.links} />
                ))}
                </div>
            </div>
        </div>
    );
}
export default Quicklinks;