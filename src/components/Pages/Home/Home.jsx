import React from "react";
import "./home.css";
//components
import BlogPost from "../../BlogPost/BlogPost";
import HomeSidebar from "../../HomeSidebar/HomeSidebar";

import { Link } from "react-router-dom";

const IMG_URL =
  "https://media.istockphoto.com/id/1349239413/photo/shot-of-coffee-beans-and-a-cup-of-black-coffee-on-a-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=0bVq4jWM5d6r4Klp0si4um7QjZIQkMjYLtuDU7oWUps=";

const Home = () => {
  return (
    <>
      <div className="homeContainer">
        <div className="homeBanner">
          <div className="bannerWrapper">
            <h1>Stay curious </h1>
            <p>
              Discover stories, thinking, and expertise from writers on any
              topic
            </p>
            <Link to="/sign-up">
              <button>Join community</button>
            </Link>
          </div>
        </div>

        <hr />

        <div className="home-main">
          <div className="home-main-left">
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
           <BlogPost blog_img={IMG_URL} profile_img='no' />
          </div>
          
          <div className="home-main-right">
            <HomeSidebar />
          </div>
        </div>
        {/* //--------load more button --------------------------// */}
        <Link to="/sign-in">

        <button className="load-more-blogs">
            Load more stories
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
