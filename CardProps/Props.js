import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src = {props.image}/>
      <p>{props.phn}</p>
      <p>{props.profession}</p>
    </div>
  )
}


ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card name="Killua" 
    image = "https://c4.wallpaperflare.com/wallpaper/616/450/559/anime-hunter-x-hunter-killua-zoldyck-hd-wallpaper-preview.jpg" 
    phn = "818181" profession = "Killer" 
    />
    
    <Card name="Kira" 
    image = "https://w0.peakpx.com/wallpaper/341/1/HD-wallpaper-kira-death-note-manga-japan-death-anime.jpg" 
    phn = "717171" 
    profession = "Killer" 
    />
   
    <Card name="Killua" 
    image = "https://wallpapers.com/images/hd/sasuke-mangekyou-sharingan-photography-ajax1ejm0t750qa3.jpg" 
    phn = "919191" 
    profession = "Killer" 
    />
    
  </div> , 
  document.getElementById("root")
)
