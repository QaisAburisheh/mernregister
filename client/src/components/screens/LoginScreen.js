import { useState, useEffect } from "react";
import axios from "axios";
import { Link,useNavigate } from "react-router-dom";

import "./LoginScreen.css";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const navigate=useNavigate()
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/");
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data.token);
      navigate("/");
    } catch (error) {
      setError(error.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div className="login-screen">
      <form onSubmit={loginHandler} className="login-screen__form">
        <h3 className="login-screen__title">login</h3>
        {error && <span className="error-message">{error}</span>}

        <div className="form-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            required
            id="email"
            placeholder="enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            required
            id="password"
            placeholder="enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button style={{background:'orange', color:'white', border:'none',width:'50px'}} type="submit">login</button>
        <span className="login-screen__subtext">
          do not have an account? <Link to="/register">register</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default LoginScreen;
