When making a counter UI which increases the value by 1 , we use "useState" function, which can only be used in components function i.e.  our .jsx files 

IN APP.JSX =>

function App() {

var [count , byone ] = useState(0) 

//count stores initial value i.e. 0 and new updated valued which get updated every time byone() is called
//the value in parenthsis of useState() is the initial value which gets  displayed.

  function increase()
  {
         byone         (count + 1)
          ||              ||
       function of     value of useState() 
       useState()
  }

  function decrease()
  {
      byone(count - 1)
  }

  return (
    <div className="container">
    
    <h1>{count}</h1>
    
    <button onClick={increase}>+</button>  //whenever we click the button increase or decrease function is triggered which further triggers 
                                             byone function , byone() excutes by taking the value of count and inc and dec them accordingly
    
    <button onClick={decrease}>-</button>
  </div>
  )

}
