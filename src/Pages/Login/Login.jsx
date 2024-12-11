import React, { useState } from 'react';
import './Login.css';
import { auth, login, signup } from '../../firebase';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleSignState = () => {
    setSignState(signState === "Sign In" ? "Sign Up" : "Sign In");
  };

  const user_auth = async (event) => {
    event.preventDefault();
    setLoading(true);
    if (!email || !password || (signState === "Sign Up" && !name)) {
      alert("Please fill out all fields.");
      setLoading(false);
      return;
    }

    try {
      if (signState === "Sign In") {
        await login(email, password);
      
      } else {
        await signup(name, email, password);
        
      }
    } catch (error) {
      console.error("Error during authentication:", error.message);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    loading ? (
      <div className="login-spinner">
        <img src="https://cdn.dribbble.com/users/29051/screenshots/2347771/spinner.mov.gif" alt="Login" />
      </div>
    ) : (
      <div className="login">
        <div className="login-form">
          <h1 className='mt-3'>{signState}</h1>

          <form onSubmit={user_auth}>
            {signState === "Sign Up" && (
              <>
                <label htmlFor="name">Name:</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  required
                />
              </>
            )}

            <label htmlFor="email">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />

            <button type="submit">{signState}</button>

            <div className="form-help">
              <div className="remember">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <p className="m-2">Need Help?</p>
            </div>
          </form>

          <div className="form-switch">
            {signState === "Sign In" ? (
              <p>
                New to Netflix?{" "}
                <span onClick={toggleSignState}>Sign Up Now</span>
              </p>
            ) : (
              <p>
                Already have an account?{" "}
                <span onClick={toggleSignState}>Sign In Now</span>
              </p>
            )}
          </div>
        </div>
      </div>
    ))
};

export default Login;
