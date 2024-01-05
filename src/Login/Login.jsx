import React from "react";
import "./Login.css";
import "./Background.css";

function LoginPage() {
  function LoginForm() {
    return (
        <div className="right">
          <div className="welcome">
            <div id="logo">
              <img src="assets/img/logo1.png" alt="TBS Textiles"/>
            </div>
            <div className="text">
              <h1>Welcome again!</h1>
              <p>Please enter your details</p>
            </div>
          </div>
          <form action="" id="login">
            <div className="input-field">
              <input type="text" name="user" maxLength={16} required placeholder="User ID" />
            </div>

            <div className="input-field">
              <input type="password"  minLength={8} maxLength={16} required placeholder="Password"/>
                
            </div>

            <div className="forget">
              <a href="/">Forgot password?</a>
            </div>
            
            <button type="submit">Log In</button>
            <button type="submit">Create User ID</button>
          </form>
        </div>
    );
  }

  function Background() {
    return (
     <div className="background">
      <div id="title">
        <p>Employee management<br/>system</p>
      </div>
      <div id="bg-img">
        <img src="/assets/img/banner.png" alt="" srcset="" />
      </div>
        <LoginForm />
      </div>
    );
  }

  return (<Background />);
}

export default LoginPage;
