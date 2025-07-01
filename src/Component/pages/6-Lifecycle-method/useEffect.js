// ........Simple code........

// import React, { useState, useEffect } from 'react';

// function LifeCycleWithHooks() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log("✅ Component Mounted or Updated");

//     // Optional cleanup function
//     return () => {
//       console.log("💀 Component Will Unmount or Re-run cleanup");
//     };
//   }, [count]);

//   const increaseCount = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <h2>React useEffect Lifecycle 💖</h2>
//       <p>Count: {count}</p>
//       <button onClick={increaseCount}>Increase Count 🔼</button>
//     </div>
//   );
// }

// export default LifeCycleWithHooks;





// ........Pet Dog........

// import React, { useState, useEffect } from "react";

// function PetDog() {
//   const [hungry, setHungry] = useState(false);

//   useEffect(() => {
//     console.log("Dog has entered the yard! 🐶");

//     const bowl = setInterval(() => {
//       setHungry(true);
//     }, 5000); // Dog gets hungry every 5 seconds

//     return () => {
//       clearInterval(bowl);
//       console.log("Dog has gone inside. Clean the yard! 🧹");
//     };
//   }, []);

//   useEffect(() => {
//     if (hungry) {
//       console.log("Dog is hungry! Woof woof! 🍖");
//       // Optional: Play barking sound here if you want 🎵
//     }
//   }, [hungry]);

//   const feedDog = () => {
//     setHungry(false);
//     console.log("You gave the dog food. It's happy now! 🐾");
//   };

//   return (
//     <div style={{ padding: "20px", border: "2px solid brown", borderRadius: "10px" }}>
//       <h2>The dog is {hungry ? "hungry 🐕" : "happy 🐶"}!</h2>
//       <button onClick={feedDog}>Feed the Dog 🍗</button>
//     </div>
//   );
// }

// export default PetDog;





// ........Pet cat........

import React, { useState, useEffect } from "react";

function PetCat() {
  const [hungry, setHungry] = useState(false);

  useEffect(() => {
    console.log("Cat has entered the house! 🐱");

    const bowl = setInterval(() => {
      setHungry(true);
    }, 5000);

    return () => {
      clearInterval(bowl);
      console.log("Cat has left. Clean up the bowl! 🧹");
    };
  }, []);

  useEffect(() => {
    if (hungry) {
      console.log("Cat is hungry! Refill the bowl! 🥛");
    }
  }, [hungry]);

  const feedCat = () => setHungry(false);

  return (
    <div>
      <h2>The cat is {hungry ? "hungry🤤" : "happy😁"}!</h2>
      <button onClick={feedCat}>Feed the Cat</button>
    </div>
  );
}

export default PetCat;
