import React from "react";
import "./Action.css";
function Action(){
    return(
        <div id="Action">
            <h1 id="Actoinheader">Choose Your Action</h1>
            <div id="Actiondiv">
                <button className="ActionButton" >Start Mediation Now</button>
                <button className="ActionButton" >Become a Mediator</button>
            </div>
        </div>
    );
}
export default Action;