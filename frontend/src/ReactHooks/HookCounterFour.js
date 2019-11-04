import React, { useState } from "react";

function HookCounterFour() {
  const [username, changeUsername] = useState({ name: " " });
  const [passWord, changePassword] = useState({ password: " " });

  const setUsername = event => {
    changeUsername({
      name: event.target.value
    });
  };

  const setPassword = event => {
    changePassword({
      password: event.target.value
    });
  };

  const alertMsg = event => {
    alert("Hello");
  };
  return (
    <div>
      <input type="text" onChange={setUsername} value={username.name} /> <br />
      <input type="text" onChange={setPassword} value={passWord.password} />
      <br />
      <button onClick={alertMsg}>Click</button>
    </div>
  );
}

export default HookCounterFour;
