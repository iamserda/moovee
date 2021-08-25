import React from "react";
// import {useState, useEffect} from "react";

function Presentation(props){
    
    return (
      <div className="app-presentation">
        {props.children.length > 0 ? props.children 
            : <h2>No results found...</h2>}
      </div>
    );
}

export default Presentation