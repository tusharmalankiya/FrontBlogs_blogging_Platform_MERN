import React, { useState } from "react";
import "./navbar.css";

//icons
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false);

  const handleMenu = () => {
    console.log("clicked");
    setIsMenu(!isMenu);
  };
  return (
    <>
      <nav>
        <div className="menuButton" onClick={handleMenu}>
          <GiHamburgerMenu size={25} className={"ham " + (!isMenu && "open")} />
          {/* <GiHamburgerMenu size={25} className={'ham open'} /> */}
          <IoClose size={25} className={"ham " + (isMenu && "close")} />
        </div>

        <div className="navbarWrapper">
          <div className="navbarLeft">

            <h4 className="logo">
            <Link to="/">
              frontBlogs
            </Link>
              </h4>
            <ul className="navbarList">
              <Link to="/"><li className="navbarItem">Home</li></Link>
              <li className="navbarItem">Category</li>
              <li className="navbarItem">Blogs</li>
            </ul>
          </div>
          <div className="navbarRight">
            <Link to="sign-up">
              <button type="button" className="navbarBtn sign-up">
                Sign Up
              </button>
            </Link>
            <Link to="sign-in">
              <button type="button" className="navbarBtn sign-in">
                Sign In
              </button>
            </Link>
          </div>
        </div>
        <div className={"menu " + (isMenu && "open")}>
          <div className="menuWrapper">
            <ul className="menuList">
              <Link to="/" onClick={handleMenu}>
                <li className="menuItem">Home</li>
              </Link>
              <li className="menuItem">Category</li>
              <li className="menuItem">Blogs</li>
            </ul>
            <div className="menuBtns">
              <Link to="/sign-up">
                <button
                  type="button"
                  className="navbarBtn sign-up"
                  onClick={handleMenu}
                >
                  Sign Up
                </button>
              </Link>
              <Link to="/sign-in">
                <button
                  type="button"
                  className="navbarBtn sign-in"
                  onClick={handleMenu}
                >
                  Sign In
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
