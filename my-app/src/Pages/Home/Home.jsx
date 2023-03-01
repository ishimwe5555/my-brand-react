import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom';
//import tick from '../../Assets/Images/approval.png'
import homeImage from "../../Assets/img/ishimwe.jpg"
import "../../index.scss" 
import Sidebar from "../../components/Sidebar/Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Home() {
  return (
    <body className='main-content'>

    <header class="container header active" id="home">
        <div class="header-content">
            <div class="left-header">
                <div class="h-shape"></div>
                <div class="image">
                    <img src={homeImage} alt=""/>
                </div>
            </div>
            <div class="right-header">
                <h1 class="name">
                    Hi, I'm <span>Norbert Ishimwe.</span>
                    A Web Developer.
                </h1>
                <p>
                    I’m a junior software engineer. Turning ideas into real life products is my calling. I help startups launch and grow their products.
                </p>
                <div class="btn-con">
                    <Link to="" class="main-btn">
                        <span className="btn-text">Download CV</span>
                        <span className="btn-icon"><FontAwesomeIcon icon="fa-brands fa-font-awesome" />
</span>
                    </Link>
                </div>
            </div>
        </div>
    </header>
    <Sidebar/>
    </body>
  )
}
export default Home