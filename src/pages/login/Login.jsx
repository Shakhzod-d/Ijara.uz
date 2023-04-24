import React from "react";

export const Login = () => {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = () => {
    const userObj = {
      username,
      password,
    };
    console.log(userObj);
  };

  return (
    <div>
      <input
        value={username}
        onChange={(e) => setUserName(e.target.value)}
        style={{ width: "200px" }}
        type="text"
        placeholder="username"
      />
      <br />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "200px" }}
        type="text"
        placeholder="password"
      />
      <br />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
};
