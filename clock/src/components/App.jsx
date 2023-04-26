import React, { useState } from "react";

function App() {
  var now = new Date().getHours() + ":" + 
            new Date().getMinutes() + ":" +
            new Date().getSeconds()

  var [time, change] = useState(now);

  function getTime() {
    //when we click the button then we want the <h1> to trigger and give us the new time 
    var newTime = new Date().getHours() + ":" + 
                   new Date().getMinutes() + ":" +
                    new Date().getSeconds()
    change(newTime);
  }

  //but if we want an automatic clock we just use setInterval()
  setInterval(getTime,1000)

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;

//new Date().toLocaleTimeString();
