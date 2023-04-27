import React, { useState } from "react";

function App() {

  const[fname , setFname] = useState("")
  const[sname , setSname] = useState("")

  function newname(event) {
      setFname(event.target.value)
  }
  
  function newsurname(event) {
    setSname(event.target.value)
}


  return (
    <div className="container">
      <h1>Hello {fname} {sname}</h1>
      <form>
        <input 
        onChange = {newname}
        name="fName" 
        placeholder="First Name" />
        <input 
        onChange = {newsurname}
        name="lName" 
        placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
