import React, { useState } from "react";
import "./signin.css";

const SignIn = () => {
  const [ isOk, setIsOk ] = useState(true);
  const [isError, setIsError] = useState(false);

  // if(isOk){
  //   return <h1>Success</h1>;
  // }
  return (<>
    <div className="signin">
      <div className="signinWrapper">
        <form action="" className="signin-form">
          <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" />

          <button type="submit">Login</button>
          
        </form>
      </div>
    </div>
    {/* <div className="register-banner-box">
    <p>Doesn't have an account? Register now!</p>
    <button type="submit">Register</button>
  </div> */}
  </>
  );
};

export default SignIn;
