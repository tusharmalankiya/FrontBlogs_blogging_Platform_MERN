import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

//icons
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

//components
// import IsOk from "../../isOk/IsOk";
import IsOk from "./../../components/isOk/IsOk"
import Oops from "./../../components/Oops/Oops"

const SignUp = () => {
  const [isOk, setIsOk] = useState(null);

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
    <div className="signup">
      <IsOk isOk={isOk} />
      <Oops oops={isOk !== null && !isOk} />
      <div className="signupWrapper">
        <form action="" className="signup-form" onSubmit={submitHandler}>
          <label className="signup-input-container">
            <span className="signup-placeholder" id="signupFirstName">
              First Name
            </span>
            <input
              type="text"
              className="signup-form-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="signupFirstName"
            />
          </label>
          <label className="signup-input-container ">
            <span className="signup-placeholder" id="signUpLastName">
              Last Name
            </span>
            <input
              type="text"
              className="signup-form-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="signUpLastName"
            />
          </label>
          <label className="signup-input-container ">
            <span className="signup-placeholder" id="signUpUsername">
              Username
            </span>
            <input
              type="text"
              className="signup-form-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="signUpUsername"
            />
          </label>
          <label className="signup-input-container ">
            <span className="signup-placeholder" id="signUpPhone">
              Phone
            </span>
            <input
              type="text"
              className="signup-form-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="signUpPhone"
            />
          </label>
          <label className="signup-input-container ">
            <span className="signup-placeholder" id="signUpEmail">
              Email
            </span>
            <input
              type="email"
              className="signup-form-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="signUpEmail"
            />
          </label>
          <label className="signup-input-container ">
            <span className="signup-placeholder" id="signUpPassword">
              Password
            </span>
            <input
              type="password"
              className="signup-form-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="signUpPassword"
            />
            <span
              className="signup-view-icon"
              onClick={(e) => handlePasswordView(e, "signUpPassword")}
            >
              <div>
                <AiOutlineEye size={25} />{" "}
              </div>
            </span>

            <span
              className="signup-view-icon hide"
              onClick={(e) => handlePasswordView(e, "signUpPassword")}
            >
              <div>
                <AiOutlineEyeInvisible size={25} />
              </div>
            </span>
          </label>
          <label className="signup-input-container ">
            <span className="signup-placeholder" id="signUpConfirmPassword">
              Confirm Password
            </span>
            <input
              type="password"
              className="signup-form-input"
              onFocus={handleFocus}
              onBlur={handleBlur}
              name="signUpConfirmPassword"
            />

            <span
              className="signup-view-icon2"
              onClick={(e) => handlePasswordView(e, "signUpConfirmPassword")}
            >
              <div>
                <AiOutlineEye size={25} />{" "}
              </div>
            </span>

            <span
              className="signup-view-icon2 hide"
              onClick={(e) => handlePasswordView(e, "signUpConfirmPassword")}
            >
              <div>
                <AiOutlineEyeInvisible size={25} />
              </div>
            </span>
          </label>

          <button type="submit">Register</button>
          <div className="sign-in-now">
            <p>already have an account? </p>
            <Link to="/sign-in">
              <button type="button">Sign In</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
