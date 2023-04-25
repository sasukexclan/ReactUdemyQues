import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Notes from "../notes"


function Showlist(listitems) {
  return (<Note 
    key = {listitems.key}
    title = {listitems.title}
    detail = {listitems.content}
  />)
}

function App() {
  return (
    <div>
      <Header />
      {Notes.map(Showlist)}
      <Footer />
    </div>
  );
}

export default App;
