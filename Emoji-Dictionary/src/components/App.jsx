import React from "react";
import Entry from "./Entry.jsx";
import emojipedia from "../emojipedia.js"


function MakeEmoji(emojiTerm)
{
  return (
    <Entry 
    key = {emojiTerm.id}
    emoji = {emojiTerm.emoji}
    name = {emojiTerm.name}
    detail = {emojiTerm.meaning}
    />
  )  
}


function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(MakeEmoji)}
      </dl>
    </div>
  );
}

export default App;
