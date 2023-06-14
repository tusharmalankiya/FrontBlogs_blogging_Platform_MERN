import React, { useState } from "react";
import "./signin.css";

//componets
import Oops from "../../components/Oops/Oops";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const SignIn = () => {
  const [isOk, setIsOk] = useState(null);
  const [isError, setIsError] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    setIsOk(false);
  };

  ///-----------------styles js------------------------------------//
  const handleFocus = (e) => {
    const placeholder_id = e.target.name;
    const placeholder = document.getElementById(placeholder_id);
    placeholder.classList.add("focus");
  };

  const handleBlur = (e) => {
    if (!e.target.value.length > 0) {
      const placeholder = document.getElementById(e.target.name);
      placeholder.classList.remove("focus");
    }
  };

  const handlePasswordView = (e, name) => {
    const eyes = document.querySelectorAll("." + e.target.className);
    eyes.forEach((eye) => {
      if (eye.classList.contains("hide")) {
        eye.classList.remove("hide");
        document
          .querySelector(`input[name=${name}]`)
          .setAttribute("type", "text");
      } else {
        eye.classList.add("hide");
        document
          .querySelector(`input[name=${name}]`)
          .setAttribute("type", "password");
      }
    });
  };

  return (
    <>
      <div className="signin">
        <Oops oops={isOk !== null && !isOk} />
        <div className="signinWrapper">
          <form action="" className="signin-form" onSubmit={submitHandler}>
            <label className="signin-input-container ">
              <span className="signin-placeholder" id="signinEmail">
                Email
              </span>
              <input
                type="email"
                className="signin-form-input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="signinEmail"
              />
            </label>
            <label className="signin-input-container ">
              <span className="signin-placeholder" id="signinPassword">
                Password
              </span>
              <input
                type="password"
                className="signin-form-input"
                onFocus={handleFocus}
                onBlur={handleBlur}
                name="signinPassword"
              />
              <span
                className="signin-view-icon"
                onClick={(e) => handlePasswordView(e, "signinPassword")}
              >
                <div>
                  <AiOutlineEye size={25} />{" "}
                </div>
              </span>

              <span
                className="signin-view-icon hide"
                onClick={(e) => handlePasswordView(e, "signinPassword")}
              >
                <div>
                  <AiOutlineEyeInvisible size={25} />
                </div>
              </span>
            </label>
            {/* <input type="email" placeholder="Email" />

          <input type="password" placeholder="Password" /> */}

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
