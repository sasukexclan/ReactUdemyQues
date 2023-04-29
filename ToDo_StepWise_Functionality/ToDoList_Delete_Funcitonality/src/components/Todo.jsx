import React, { useState } from "react"


function TodoItem(props) {
  return(

    /*to get the id of that particualar list item we are clicking on we pass the props.id in 
    onChecked() like an arrow function. And also now this delete funciton will only be called when
    and only when the list itm is clicked not every time we referesh the page*/
    
    <li onClick = { () => {
      props.onChecked(props.id)
    }}>{props.text}</li> 
  )

}

export default TodoItem