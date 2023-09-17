import React from "react";
import "./JustInfo.css"

function JustInfo(){
    console.log("JustInfo : Render");
    return (
        <div className="ticket-style-div">
            <h1>JustInfo</h1>
        </div>
    )
}


const JustComponent = React.memo(JustInfo);

export default JustComponent;
