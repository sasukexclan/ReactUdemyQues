import React, { useState } from "react";
import TodoItem from "./Todo.jsx";


function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems(prevItems => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    /* accesing the saved items in item array and using filter funtion we'll get rid of those 
    which matches the given id i.e.
    we'll catch the id of the item that we clicked on and remove it and print the new item */
      setItems(prevItems => {

/* filter function takes the value as a function in which the first element is the list item and the second one is its id*/

/* we'll loop through the item list and print only those items which do not match the id number that we have clicked */
       return prevItems.filter(
            (item , index) => {  
              /* returning only those items which id did not matched the item id that we clicked and hence the list is updated and shown us on the screen */
                return  index !== id               
            })
      })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem , index) => (
            <TodoItem 
            key = {index}
            id = {index}
            text = {todoItem}
            onChecked = {deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
