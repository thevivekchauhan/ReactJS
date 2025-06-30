//functional component click to change value

// import React, {useState} from 'react';
// function FunctionCompo(){
//   const [count,setCount] = useState(0)
//   const handleClick=()=>{
//     setCount(count + 1);
//     console.log(count);
//   }
//   return(
//     <div>
//       <center>
//       <h1> Your count value is: {count}</h1>
// <button onClick={handleClick}>Click me</button>
//       </center>
//     </div>
//   )
// }
// export default FunctionCompo;

//increment and decrement value

import React, { useState } from "react";
function FirstFunction() {
  const [count, setCount] = useState(1);
  const handleIncre = () => {
    setCount(count + 1);
    console.log(count);
  };
  const handleDescre = () => {
    setCount(count - 1);
    console.log(count);
  };
  return (
    <center>
      <div>
        <h1>Your value is: {count}</h1>
        <button
          style={{
            backgroundColor: "green",
            color: "white",
            margin: "10px",
            marginLeft: "10px",
            fontWeight: "bold",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={handleIncre}
        >
          +
        </button>
        <button
          style={{
            backgroundColor: "red",
            color: "white",
            margin: "10px",
            marginLeft: "10px",
            fontWeight: "bold",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
          onClick={handleDescre}
        >
          -
        </button>
      </div>
    </center>
  );
}
export default FirstFunction;
