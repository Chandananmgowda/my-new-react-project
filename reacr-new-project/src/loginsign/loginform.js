import { useState } from "react";
// import React {useEffect,UseState} from "react";

const LoginForm = () =>{
  //  const [formDate, setFromDate]=useState({
  //   email:'';
  //   password:'';
    
  //  });
  //  const[error,setEffect]=useState({});
  //  const[showModel,setShowModel]=useState(false);

  //  const validate =() =>{
  //   const newError = {};
  //   if (!form)
  //  }
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