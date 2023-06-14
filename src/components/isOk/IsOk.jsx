import React from "react";
import "./isok.css";
import { Link } from "react-router-dom";


//icons
import { BsCheck2Circle } from "react-icons/bs";



const IsOk = ({isOk}) => {
  return (
    <>
      <div className={"isOKContainer " + (isOk && 'isok')} > 
        <div className="ok-body">
          <div className="ok-up">
            <div className="ok-icon">
              <BsCheck2Circle />
            </div>
          </div>
          <div className="ok-down">
            <p>Congratulations, your account has been created successfully!!</p>
            <Link to="/sign-in"><button>Continue</button></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default IsOk;
