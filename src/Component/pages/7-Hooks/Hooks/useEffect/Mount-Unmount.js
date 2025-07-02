// best timer which is do mount and unmount


// import React, { useState, useEffect } from "react";

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     console.log("⏳ Timer started");

//     const timer = setInterval(() => {
//       setSeconds((prev) => prev + 1); // increase seconds every second
//     }, 1000);

//     return () => {
//       clearInterval(timer);
//       console.log("🛑 Timer stopped (component unmounted)");
//     };
//   }, []);

//   return (
//     <div style={{ padding: "20px", border: "2px dashed purple", borderRadius: "10px" }}>
//       <h2>⏱️ Timer: {seconds} seconds</h2>
//     </div>
//   );
// }

// export default Timer;



import React, {useEffect,useState} from 'react';

function useEff() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleTotal = () => {
    setTotal(total + 1);
  };

//clean up function it means when Click first time then run Count is updated after that when we click second time then count will unmounted then count is update.
useEffect(() => {
  alert("Count is updated");

  return () => {
    alert("Count is unmounted");
  };
}, [count]);

  return (
    <div>
      <h1>Your Count is {count}</h1>
      <button onClick={handleClick}>Count +</button><br></br><br></br>
      <h1>Your Total Count is {total}</h1>
      <button onClick={handleTotal}>Total Count</button>
    </div>
  );
}

export default useEff;


