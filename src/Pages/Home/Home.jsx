import React, { useEffect, useState } from "react";
import "./home.css";
//components
import BlogPost from "../../components/BlogPost/BlogPost";
import HomeSidebar from "../../components/HomeSidebar/HomeSidebar";

import { Link } from "react-router-dom";
import axios from "axios";

// const IMG_URL =
//   "https://media.istockphoto.com/id/1349239413/photo/shot-of-coffee-beans-and-a-cup-of-black-coffee-on-a-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=0bVq4jWM5d6r4Klp0si4um7QjZIQkMjYLtuDU7oWUps=";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [randnum, setRandNum] = useState(0);

  //development test just to get and post random num from server to the server
  useEffect(()=>{
    const fetchRandNum = async () =>{
      try{
        const resp = await axios.get("http://localhost:4000/api/v1/dev/randnum");
        console.log(resp.data);
        setRandNum(resp.data.num);
        await axios.post("http://localhost:4000/api/v1/dev/randnum", {num: resp.data.num}, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
      }catch(err){
        console.error("error while fetching random num", err);
      }
    }
    fetchRandNum();

    // const Interval = setInterval(()=>{
    //   if(randnum !== 0 || randnum <= 100){
    //     fetchRandNum();
    //   }
    // }, 100);

    // return ()=>{
    //   clearInterval(Interval);
    // }

  }, []);

///////////////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(()=>{
    axios.get("http://localhost:4000/api/v1/dev").then((res)=>{
      setBlogs(res.data);
      console.log(res.data);
    })

  }, [])

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
        <h1>{randnum}</h1>
        
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
            {/* <BlogPost
             author="Author"
             title="What I Learned as a Product Designer at Apple" 
             desc="  In 2021 I landed my dream job. Working at Apple, the holy grail of
             minimalistic design, innovation and creativity. A place where"
            blog_img={IMG_URL}
             profile_img={IMG_URL} /> */}

             {blogs.map((blog)=>{
              return <BlogPost
              key={blog._id}
              author={blog.firstname}
              title={blog.title} 
              desc={blog.desc}
             blog_img={blog.image}
              profile_img={blog.image} />
             })}
            

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
