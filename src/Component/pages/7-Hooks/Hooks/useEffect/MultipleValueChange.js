import React, { useEffect, useState } from "react";

function useEff() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleTotal = () => {
    setTotal(total + 1);
  };

  //when multiple value store in that array then also render like [count, total]
  useEffect(() => {
    alert("when count and total change then I rander.");
  }, [count, total]);

  return (
    <div>
      <h1>Count is {count}</h1>
      <button onClick={handleClick}>Count +</button>
      <br></br>
      <br></br>
      <h1>Total Count is {total}</h1>
      <button onClick={handleTotal}>Total Count</button>
    </div>
  );
}

export default useEff;
