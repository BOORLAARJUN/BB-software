import React from "react";
import "./Quicklinks.css";
import Qlink_1 from "./Qlink_1.js";
import Quicklinks_data from "./Quicklinks_data";
function Quicklinks(){
    return(
        <div id="Quicklink">
            <div className="Quicklinks1">
                <h2 id="header" >Quick Links</h2>
                <div id="block">
                {Quicklinks_data.map((section, index) => (
                <Qlink_1 key={index} title={section.title} links={section.links} />
                ))}
                </div>
            </div>
        </div>
    );
}
export default Quicklinks;