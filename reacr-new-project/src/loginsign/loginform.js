import React from "react";

const LoginForm = () =>{
  return (
  <div className="form-container">
    <h1>Login</h1>
    <form>
      <div>
        <label>Email:</label>
        <input type="email" placeholder="Type your registered email id here..."/>
      </div>
      <div>
        <label>Password:</label>
        <input type="password" placeholder="enter your password"/>
      </div>
      <button type="submit">Submit</button>
    </form>

  </div>
  )
}
export default LoginForm ;