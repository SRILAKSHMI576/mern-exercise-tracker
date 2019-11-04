import React, { useState } from "react";

function HookCounterTwo() {
  const initialValue = 0;

  const [count, setCount] = useState(initialValue);
  return (
    <div>
      count: {count} <br />
      <button onClick={() => setCount(initialValue)}>Reset: </button> <br />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default HookCounterTwo;
