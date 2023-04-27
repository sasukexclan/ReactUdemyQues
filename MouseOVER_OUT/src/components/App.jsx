import React, { useState } from "react";

function App() {
  
  const[headingText , changeheading] = useState("Hello")
  const[isMousedOver , setColour] = useState(false) 
  function handelClick() {
    changeheading("Submitted")
  }

  function changeColor() {
      setColour(true)
  }

  function changeColorBack() {
    setColour(false)
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>

      <input type="text" placeholder="What's your name?" />
     
      <button 
      style = {{backgroundColor : isMousedOver ? "black" : "white"}}
      onClick={handelClick}
      onMouseOver = {changeColor}
      onMouseOut = {changeColorBack}
      >Submit</button>

   
    </div>
  );
}

export default App;
