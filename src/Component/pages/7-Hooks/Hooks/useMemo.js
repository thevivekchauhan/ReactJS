// import React, { useState } from "react";

// const MyuseMemo = () => {

//   const [count, setCount] = useState(1);

//   const handleClick = () => {
//     setCount(count + 1);
//     console.log("My value has increased");
//   };

//   function expensiveTask(num){
//     console.log("I am expensive task");
//     for(let i=0; i<=10000000000; i++) {}
//     return num * 10;
//   }

//   let doubleValue = expensiveTask(4);

//   return (
//     <center>
//       <div>
//         <h1>Count is : {count}</h1>
//         <button
//           onClick={handleClick}
//           style={{ color: "green", fontSize: "20px" }}
//         >
//           +
//         </button>
//       </div>
//       <div>
//         <h1>
//             doubleValue {doubleValue}
//         </h1>
//       </div>
//     </center>
//   );
// };

// export default MyuseMemo;







import React, { useMemo, useState } from "react";

const MyuseMemo = () => {
  const [count, setCount] = useState(1);
  const [input, setInput] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
    console.log("My value has increased");
  };

  function expensiveTask(num) {
    console.log("I am expensive task");
    // for (let i = 0; i <= 1000000000; i++) {} // reduced to avoid freeze
    // return num * 10;
  }

  const doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <center>
      <div>
        <h1>Count is : {count}</h1>
        <button
          onClick={handleClick}
          style={{ color: "green", fontSize: "20px", cursor: "pointer" }}
        >
          +
        </button>
      </div>
      <br />
      <div>
        <input
          type="number"
          placeholder="Enter your number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <h1>doubleValue {doubleValue}</h1>
      </div>
    </center>
  );
};

export default MyuseMemo;
