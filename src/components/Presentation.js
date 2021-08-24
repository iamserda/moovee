import React from "react";
// import {useState, useEffect} from "react";

function Presentation(props){
    
    return(
        <div className="app-presentation">
            {props.children ? props.children : "No results found"}
        </div>
    )
}

export default Presentation