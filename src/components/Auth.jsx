import React, { useState } from "react";
import "./Auth.css"; // ✅ simple CSS file import

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert("Please fill all fields");
      return;
    }
    if (localStorage.getItem(username)) {
      alert("User already exists!");
    } else {
      localStorage.setItem(username, JSON.stringify({ password }));
      alert("Registration successful! Please login.");
      setIsLogin(true);
      setUsername("");
      setPassword("");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = localStorage.getItem(username);
    if (!user) {
      alert("User not found! Please register.");
      return;
    }
    const userData = JSON.parse(user);
    if (userData.password === password) {
      alert("Login Successful!");
      localStorage.setItem("loggedInUser", username);
    } else {
      alert("Incorrect password!");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Login Card */}
        {isLogin && (
          <form onSubmit={handleLogin} className="auth-card">
            <h2>Login</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Login</button>
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Register</span>
            </p>
          </form>
        )}

        {/* Register Card */}
        {!isLogin && (
          <form onSubmit={handleRegister} className="auth-card">
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Register</button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default Auth;
