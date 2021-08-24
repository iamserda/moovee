import React from "react";
// import {useState, useEffect} from "react";

function Presentation(props){
    console.log(props.children.length)
    return (
      <div className="app-presentation">
        {props.children.length ? props.children : <h2>No results found... Please try again!"</h2>}
      </div>
    );
}

export default Presentation