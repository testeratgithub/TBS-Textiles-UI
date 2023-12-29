import React from "react";
import "./Login.css"

function LoginPage() {
  function LoginForm() {
    return (
        <div class="right">
          <img src="assets/img/logo.png" alt="" />
          <form action="">
            <div class="text">
              <h1>Welcome again!</h1>
              <p>Please enter your details</p>
            </div>

            <div class="input-field">
              <input type="text" name="user" maxLength={16} required placeholder="User ID" />
            
            </div>

            <div class="input-field">
              <input type="password"  minLength={8} maxLength={16} required placeholder="Password"/>
              
            </div>

            <div class="forget">
              <a href="#">Forgot password?</a>
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
        <LoginForm />
      </div>
    );
  }

  return (<Background />);
}

export default LoginPage;
