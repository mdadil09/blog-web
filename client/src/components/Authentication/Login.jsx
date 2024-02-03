import axios from "axios";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = await axios.post(
        "http://localhost:5718/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("userInfo", JSON.stringify(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <label>email:</label>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>password:</label>
      <input
        type="text"
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Login;
