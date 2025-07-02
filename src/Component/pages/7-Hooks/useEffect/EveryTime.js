import React, {useEffect,useState} from 'react';

function useEff() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

//   this is use for every time reder every time reload page
  useEffect(() => {
    alert("Hello, I am render every time when reload page");
  });

  return (
    <div>
      <h1>Your Count is {count}</h1>
      <button onClick={handleClick}>Count +</button>
    </div>
  );
}

export default useEff;