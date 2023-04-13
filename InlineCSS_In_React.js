//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.


import React from "react";
import ReactDOM from "react-dom";

var today  = new Date();
var time = today.getHours(); 
var greeting;

//first we will make an object that will contain the styles 
//and then we can call this function 

const customStyle = {
  color : ""
}

if(time < 12)
{
  greeting = "Good Morning"
  customStyle.color = "red"
}
else if (time < 19)
{
  greeting = "Good Afternoon"
  customStyle.color = "green"
}
else  {
  greeting = "Good Night"
  customStyle.color = "blue"
}

ReactDOM.render (
  <div>
    <h1 style={customStyle}>{greeting}</h1>
    </div>,
    document.getElementById("root")
)
