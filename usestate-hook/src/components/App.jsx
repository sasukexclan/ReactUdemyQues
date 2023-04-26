import React,{useState} from "react";

function App() {
  var [count , byone ] = useState(0)
  
  function increase()
  {
      byone(count + 1)
  }

  function decrease()
  {
      byone(count - 1)
  }

  return (
    <div className="container">
    <h1>{count}</h1>
    <button onClick={increase}>+</button>
    <button onClick={decrease}>-</button>
  </div>
  )
}

export default App;
