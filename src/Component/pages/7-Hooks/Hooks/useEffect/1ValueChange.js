import React, {useEffect,useState} from 'react';

function useEff() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //We write count inside array [count] that every time render when count value change.
  useEffect(() => {
    alert("when count change then I rander.");
  }, [count]);

  return (
    <div>
      <h1>Your Count is {count}</h1>
      <button onClick={handleClick}>Count +</button>
    </div>
  );
}

export default useEff;