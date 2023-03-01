import ViewBlogs from "./components/Blog";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
//import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Contact from "./Pages/Contact/Contact";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

// import './index.scss';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';

export default function App(){
    return(
        <Router>
            <Routes>
          <Route exact path='/' element={<Home />}></Route>
          <Route exact path='/signup' element={<Signup />}></Route>
          <Route exact path='/login' element={<Login />}></Route>
          <Route exact path='/contact-me' element={<Contact />}></Route>
          <Route exact path='/portfolio' element={<Portfolio />}></Route>  
          <Route exact path='/aboutme' element={< AboutMe />}></Route>
          {/* <Route exact path='/single-blog/:id' element={< SinglePage />}></Route> */}
          <Route exact path='/blogs' element= { <div className="dashboard-wrapper">
                <Navbar/> <ViewBlogs/ ></div>}>
          </Route> 
          {/* <Route exact path='/profile' element= { <Protected isLoggedIn={LoggedIn} >< Profile /></Protected> }></Route> */}
        </Routes>
        </Router>
    );
}

