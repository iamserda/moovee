import React from "react";
// import {useState, useEffect} from "react";

function Presentation(props){
    
    return(
        <div className="app-presentation">
            {props.children}
        </div>
    )
}

export default Presentation