import React, { useEffect, useState } from "react";
import "./home.css";
//components
import BlogPost from "../../components/BlogPost/BlogPost";
import HomeSidebar from "../../components/HomeSidebar/HomeSidebar";

import { Link } from "react-router-dom";
import axios from "axios";

const IMG_URL =
  "https://media.istockphoto.com/id/1349239413/photo/shot-of-coffee-beans-and-a-cup-of-black-coffee-on-a-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=0bVq4jWM5d6r4Klp0si4um7QjZIQkMjYLtuDU7oWUps=";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // useEffect(()=>{
  //   axios.get("http://localhost:4000/api/v1").then((res)=>{
  //     setBlogs(res.data);
  //   })

  // }, [])

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
            {/* <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
            <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
            <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
            <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
            <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
            <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
            <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
            <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} />
            <BlogPost blog_img={IMG_URL} profile_img={IMG_URL} /> */}
            {}
            <BlogPost
             author="Author"
             title="What I Learned as a Product Designer at Apple" 
             desc="  In 2021 I landed my dream job. Working at Apple, the holy grail of
             minimalistic design, innovation and creativity. A place where"
            blog_img={IMG_URL}
             profile_img="no" />

             {/* {blogs.map((blog)=>{
              return <BlogPost
              key={blog._id}
              author={blog.firstname}
              title={blog.title} 
              desc="  In 2021 I landed my dream job. Working at Apple, the holy grail of
              minimalistic design, innovation and creativity. A place where"
             blog_img={'http://localhost:4000' +blog.image}
              profile_img={'http://localhost:4000' +blog.image} />
             })} */}
            

            {/* //--------load more button --------------------------// */}

            <Link to="/sign-in">
              <button className="load-more-blogs">Load more stories</button>
            </Link>
          </div>

          <div className="home-main-right">
            <HomeSidebar />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
