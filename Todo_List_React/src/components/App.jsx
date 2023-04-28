import React, { useState } from "react";

function App() {
  const [inputText, changeIt] = useState(""); //inputText will contain nothing at the beginning but
  //everytime we make any change in the list that gets saved in inputText only
  const [itemsInArr, setArr] = useState([]);

  function handleChange(event) {
    /* expanded version

      var newValue = event.target.value
      changeIt = newValue

    */
    changeIt(event.target.value); //by doing this we are keeping the hold of old value and updating it with the new value
  }

  //For saving the old item in the array and then keep adding new items at the end of the array ,
  function addToList() {
    // we will declare a varable prev to store the old array element
    setArr((prev) => {
      //Then we return a new array using spread operator which has the prev value and the new items which get added
      return [...prev, inputText];
    });

    /*in order to clean the text area after we have puched the add button we just call the changeIt 
     funciton and set it to an empty string */
    changeIt("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {itemsInArr.map((todoList) => (
            <li>{todoList}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
