import React, { useState } from "react";

function App() {

  const [name , changeName] = useState("")
  const [headingText , setHeading] = useState("")

  function handelChange(event) {
    console.log(event.target.value);
    changeName(event.target.value);
  } 

  function whenClicked() {
     setHeading(name)
  }



  return (
    <div className="container">
      <h1>Hello {headingText}</h1> 
      <input 
     onChange = {handelChange} 
      type="text" 
      placeholder="What's your name?" />
      <button onClick = {whenClicked}>Submit</button>
    </div>
  );
}

export default App;
