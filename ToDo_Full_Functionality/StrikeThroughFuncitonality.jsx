import React, { useState } from "react"


function TodoItem(props) {
  const[done , setDone] = useState(false)

function handleClick() {
    setDone((prev) => {   //prev stores the previous value of done which is false which just means that the task has not been done yet aka clicked 
        return !prev   //by returning !prev we are just turning the value the value to true which just means that works done and now we can apply the strikethough style        
    })  
}


  return(
    //if the value of done is true i.e. work is completed then apply strikethrough proprty else dont 
    <li onClick = {handleClick} style = {{textDecoration : done ? "line-through" : "none"}}>{props.text}</li> 
  )

}

export default TodoItem
