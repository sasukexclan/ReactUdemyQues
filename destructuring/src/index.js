
// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda , tesla ] = cars;

const {speedStats:{topSpeed : hondaTopSpeed}} = honda //we are not accessing serotosixty caz we dont need to  
                                                      //and we are renaming topspeed as hondas top speed

const {speedStats:{topSpeed : teslaTopSpeed}} = tesla

const {coloursByPopularity : [hondaTopColour]} = honda
const {coloursByPopularity : [teslaTopColour]} = tesla

//const {color : teslaTopColour} = tesla

//const {color : hondaTopColour} = honda

 ReactDOM.render(
   <table>
     <tr>
       <th>Brand</th>
       <th>Top Speed</th>
    </tr>
     <tr>
       <td>{tesla.model}</td>
       <td>{teslaTopSpeed}</td>
       <td>{teslaTopColour}</td>
     </tr>
     <tr>
       <td>{honda.model}</td>
       <td>{hondaTopSpeed}</td> 
      <td>{hondaTopColour}</td> 
     </tr>
   </table>,
   document.getElementById("root")
 ); 
 
 

