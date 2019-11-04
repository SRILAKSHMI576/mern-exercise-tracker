import React, { useState } from "react";

function HookCounter() {
  const [count, incrementCount] = useState(0);

  return (
    <div>
      <button onClick={() => incrementCount(count + 1)}>Click {count}</button>
    </div>
  );
}

export default HookCounter;
