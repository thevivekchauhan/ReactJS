import React, {useEffect,useState} from 'react';

function useEff() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  //use array [] this is dependency array that only render in one time
  useEffect(() => {
    alert("I will run only first render the page");
  }, []);

  return (
    <div>
      <h1>Your Count is {count}</h1>
      <button onClick={handleClick}>Count +</button>
    </div>
  );
}

export default useEff;