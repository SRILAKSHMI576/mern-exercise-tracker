import React from "react";

function ChildCompoent(props) {
  return (
    <div>
      <button onClick={() => props.parentHandler("child")}>Hello Parent</button>
    </div>
  );
}

export default ChildCompoent;
