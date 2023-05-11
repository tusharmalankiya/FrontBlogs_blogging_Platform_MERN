import React, { useState } from "react";
import "./signup.css";

//components
import IsOk from "../../isOk/IsOk";


const SignUp = () => {
  const [ isOk, setIsOk ] = useState(true);



  return (
    <div className="signup">
      {isOk && <IsOk />}
      <div className="signupWrapper">
        <form action="" className="signup-form">
          <input type="text" placeholder="First Name"/>
          
          <input type="text" placeholder="Last Name"/>

          <input type="text" placeholder="Username"/>

          <input type="text" placeholder="Phone" />

          <input type="email" placeholder="Email"/>

          <input type="password" placeholder="Password"/>

          <input type="password" placeholder="Confirm Password"/>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
