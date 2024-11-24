
import React, { useState } from "react";
import './About.css';




function About() {
  // Declare state for the counter
  const [count, setCount] = useState(0);


  // Handlers for button clicks
  const increment = () => setCount(count + 1);
  const reset = () => setCount(0);
  const decrement = () => setCount(count - 1);

  return (
    <div >
      <h1>Counter</h1>
      <label>{count}</label>
      <div>
        <button onClick={increment} >Increment</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement} >Decrement</button>
      </div>
    </div>
  );
}


export default About;
