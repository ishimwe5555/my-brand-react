import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom';
import "../../index.scss" 
import Sidebar from "../../components/Sidebar/Sidebar"
import PortfolioItem from '../../components/Portfolio/PortfolioItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Portfolio() {
  return (
    <body className='main-content'>
        <main>
            <section class="container" id="portfolio">
                <div class="main-title">
                    <h2>My <span>Portfolio</span><span class="bg-text">My Work</span></h2>
                </div>
                <p class="port-text">
                    Here is some of my work that I've done in various programming languages.
                </p>
                <div className="portfolios">
                   <PortfolioItem/>
                   <PortfolioItem/>
                   <PortfolioItem/>
                   <PortfolioItem/>
                </div>
            </section>
        </main>
        <Sidebar/>
    </body>
  )
}

export default Portfolio