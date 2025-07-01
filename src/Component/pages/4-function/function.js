// This is a simple function.

// function Myfunction() {
//     return(
//         <div>
//             <h1>This is simple function.</h1>
//         </div>
//     )
// }




// This is Arrow function.

// const MyArrowFunction = () => {
//     return(
//         <div>
//             <h1>This is arrow function.</h1>
//         </div>
//     )
// }



// This is a simple function with use Arrow function and event handler.

// function MyArrowFunction() {
//   const handleClick = () => {
//     alert("Cham bhai button dabayu ?");
//     console.log("button dabayu ho tme bhai")
//     console.log("Cham dabayu su jarur hati he bolo bolo te te ")
//   };
//   return (
//     <div>
//       <h1>You can click button and see the magic.</h1>
//       <button
//         style={{
//           backgroundColor: "red",
//           color: "white",
//           padding: "10px 20px",
//           borderRadius: "5px",
//         }}
//         onClick={handleClick}
        
//       >
//         Mne click karo
//       </button>
//     </div>
//   );
// }

// export default MyArrowFunction;





//this is useSate using build counter + and - 

import React, {useState} from 'react';

function MeHuNa () {
    const [count, setCount] = useState(1)

    const handleIncre= () => {
        setCount(count + 1);
        console.log('mne vadhare che bolo su karvu ?');
    }
    const handleDescre= () => {
        setCount(count - 1);
        console.log('mne ochu kare che bolo su karvu ?');
    }

    return (
        <center>
      <div>
        <h1> Your count is: {count}</h1>
        <button
          style={{
            backgroundColor: "Green",
            color: "white",
            padding: "10px 20px",
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
            padding: "10px 20px",
            borderRadius: "5px",
            margin: "10px",
          }}
          onClick={handleDescre}
        >
          -
        </button>
      </div>
      </center>
    );
}

export default MeHuNa;