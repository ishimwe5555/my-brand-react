import React, { useState, useEffect } from "react";
//import {ReactDOM} from 'react-dom';
import { Link } from 'react-router-dom';
import "./blogs.scss";
//import ReactDOM  from "react-dom";

function ViewBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchBlogs();
    }, []);
  
    async function fetchBlogs() {
      setLoading(true);
      const response = await fetch(
        "https://my-portfolio-production-2587.up.railway.app/blogs/"
      );
      const result = await response.json();
      //console.log(result.Blogs)
      setBlogs(result.Blogs);
      setLoading(false);
    }

    if (blogs.length < 1) {
      return <div>No blogs found.</div>;
    }

      return (    
        <div class="dashboard-right">
          {loading ? <div className='loader'><div className="spinner"></div></div> : null}
            
      <h3>My blogs</h3> 
      <div className="blogs" id="all-blogs">
        {blogs.map((blog) => (
         
          <div className="cardd blog">
          <Link to={`blog-page.html?id=${blog._id}`}>
            <img src={blog.imageUrl} alt=""/>
            <div className='blog-text'>
            <h4>{blog.title}</h4>
            </div>
          </Link>   
      
          <div className="hover-items">
            <h3>View or Update</h3>
            <div className="icons">
              <Link to={`blog-page.html?id=${blog._id}`} className="icon">
              <i class="fas fa-eye"></i>
              </Link>
              <Link to={`update-blog.html?id=${blog._id}`} className="icon">
                  <i className="fas fa-edit"></i>
              </Link>
                               
            </div>
          </div>
        </div>
        ))}
      </div>
     </div>
     );
  
}

export default ViewBlogs;
// <BlogPost key={blog._id} title={blog.title} image={blog.imageUrl} content={blog.content} />
