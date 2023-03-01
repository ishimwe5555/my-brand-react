import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom';
import "../../index.scss" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Port1 from "../../Assets/img/port1.jpg"

function PortfolioItem() {
  return (
    <div className="portfolio-item">
    <div className="image">
        <img src={Port1} alt=""/>
    </div>
    <div className="hover-items">
        <h3>Project Source</h3>
        <div className="icons">
            <Link To="#" className="icon">
            <FontAwesomeIcon icon={['fab', 'github']} />
            </Link>
            <Link To="#" className="icon">
                <FontAwesomeIcon icon={['fab', 'behance']} />
            </Link>
            <Link To="#" className="icon">
                <FontAwesomeIcon icon={['fab', 'youtube']} />
            </Link>
        </div>
    </div>
</div>
  )
}

export default PortfolioItem