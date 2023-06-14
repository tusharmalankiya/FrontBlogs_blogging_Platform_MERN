import React from "react";
// import { Link } from "react-router-dom";


//icons
import { RxCrossCircled } from "react-icons/rx";


import "./oops.css";

const Oops = ({oops}) => {
  return (
    <>
    <div className={"oopsContainer " + (oops && 'oops')} > 
      <div className="oops-body">
        <div className="oops-up">
          <div className="oops-icon">
            <RxCrossCircled />
          </div>
        </div>
        <div className="oops-down">
          <p>Oops! Something went wrong. please try again later!!</p>
          <button onClick={()=>window.location.reload() }>Continue</button>
        </div>
      </div>
    </div>
  </>
  )
}

export default Oops