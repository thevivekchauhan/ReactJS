import React, { useState } from "react";

function MyuseState() {
  const [count, setCount] = useState(1);

  const buttonStyle= {
          margin: "15px",
          padding: "10px",
          color: "white",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          fontWeight: "bold",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        }

  const handleIncre = () => {
    setCount(count + 1);
    console.log("Mne vadhare che bolo su karvu mare vadhvu j pade ne")
  };

  const handleDecre = () => {
    setCount(count - 1);
    console.log("Mne occhu kare che bolo su karvu mare occhu thavu j pade ne")
  };
  return (
    <center>
    <div>
      <h1>This is my useState Counter</h1>
      <h2>Your count value is {count}</h2>
      <button
       style={{ ...buttonStyle, backgroundColor: "green" }}
        onClick={handleIncre}
      >
        +
      </button>
      <button
  style={{ ...buttonStyle, backgroundColor: "red" }}
  onClick={handleDecre}
  disabled={count === 0}
>
    -
</button>
    </div>
    </center>
  );
}

export default MyuseState;
