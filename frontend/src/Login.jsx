import { useState } from "react";
import axios from "axios";
import "./App.css"
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password
      });

      console.log(res.data);
      alert("Login Success");
    } catch (error) {
      console.log(error.response?.data);
      alert("Login Failed");
    }
  };

  return (
    <div className="login-container">
    <form onSubmit={handleLogin} className="login-form">
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Login</button>
    </form> </div>
  );
}

export default Login;
