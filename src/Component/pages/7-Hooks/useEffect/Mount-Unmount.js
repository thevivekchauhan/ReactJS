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