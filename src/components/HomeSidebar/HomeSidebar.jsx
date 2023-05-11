import React from "react";
import "./homesidebar.css";
import { Link } from "react-router-dom";

const HomeSidebar = () => {
  return (
    <div className="homeSidebar">
      <h2>Discover more of what matters to you</h2>
      <div className="homeCategories">
        <Link to="/sign-in">
          {" "}
          <div className="homeCategoryItem">Programming</div>
        </Link>
        <Link to="/sign-in">
          {" "}
          <div className="homeCategoryItem">Data Science</div>
        </Link>
        <Link to="/sign-in">
          {" "}
          <div className="homeCategoryItem">Coding</div>
        </Link>
        <Link to="/sign-in">
          {" "}
          <div className="homeCategoryItem">AI</div>
        </Link>
        <Link to="/sign-in">
          {" "}
          <div className="homeCategoryItem">Programming</div>
        </Link>
        <Link to="/sign-in">
          {" "}
          <div className="homeCategoryItem">Programming</div>
        </Link>
      </div>
      <Link to="/sign-in">

      <p>See More Topics</p>
      </Link>
    </div>
  );
};

export default HomeSidebar;
