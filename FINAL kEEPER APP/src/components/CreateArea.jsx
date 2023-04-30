import React, { useState } from "react";

function CreateArea(props) {

  //it will save both title and content
  const[note , setNote] = useState({
      title : "",
      content : ""
  }) 

  function handleChange(event) {
      const{name , value} = event.target;     // name as in the title of the note refer line no 27

      setNote(prevNote => {  // for making new entries 
       return {
        ...prevNote,          //spread operator which just spreads all the key and value pairs which are in our note
        [name] : value        
       } 
      })
  }

  function submitNote(event) {

//when we click the Add button over here using submit button it will trigger the addNote() in App.jsx 
    props.onAdd(note) 
    //this setNotes function resets the input area back to empty area by just blank area for entering the new note. AKA refereshing only the input area
    setNote({
      title: "",
      content: ""
    });        
    event.preventDefault();
  }

  return (
    <div>
      <form>

        <input 
        name="title" 
        placeholder="Title" 
        value = {note.title} 
        onChange = {handleChange}/>

        <textarea name="content" 
        placeholder="Take a note..." 
        rows="3" 
        value = {note.content}
        onChange = {handleChange}
        />
        <button onClick = {submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
