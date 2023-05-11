import React from "react";
import "./blogpost.css";
import { Link } from "react-router-dom";

const BlogPost = (props) => {
  return (
    <>
      <aside className="blog">
        <div className="blog-details">
          <Link to="/sign-in">
          <div className="author-details">
            <img src={props.blog_img} alt="" />
            <span>Author</span>
          </div>
          <div className="blog-title-desc">
            <h2 className="blog_title">
              What I Learned as a Product Designer at Apple
            </h2>
            <p className="blog_desc">
              In 2021 I landed my dream job. Working at Apple, the holy grail of
              minimalistic design, innovation and creativity. A place where
            </p>
          </div>
          </Link>
          <div className="date">
            <span>Date</span>
          </div>
        </div>
        <Link to="/sign-in">
        <div className="blog-img">
          <img src={props.profile_img} alt="" />
        </div>
        </Link>
      </aside>
    </>
  );
};

export default BlogPost;
