// I not learn this only paste this code for only see how it works. 

import React, { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ border: "2px solid pink", padding: "20px", borderRadius: "10px" }}>
      <h2>❤️ Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increase" })}>➕ Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })} disabled={state.count===0}>➖ Decrease</button>
      <button onClick={() => dispatch({ type: "reset" })}>🔄 Reset</button>
    </div>
  );
}

export default Counter;