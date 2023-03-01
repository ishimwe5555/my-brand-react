import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "../../index.scss"
import { Navigate, useNavigate } from 'react-router-dom';
import adminImage from '../../Assets/img/foto.jpg'

function Sidebar(){
    const [active, setActive] = useState(false)
    const navigate = useNavigate();

    return(
    <div class="controls">
        <div class="control active-btn" data-id="home" >
            <i class="fas fa-home"></i>
        </div>
        <div class="control" data-id="about">
            <i class="fas fa-user"></i>
        </div>
        <div class="control" data-id="portfolio">
            <i class="fas fa-briefcase"></i>
        </div>
        <div class="control" data-id="blogs">
            <i class="far fa-newspaper"></i>
        </div>
        <div class="control" data-id="contact">
            <i class="fas fa-envelope-open"></i>
        </div>
        <div class="control" data-id="login">
            <i class="fas fa-sign-in-alt"></i>
        </div>
        
    </div>
    // <div class="theme-btn">
    //     <i class="fas fa-adjust"></i>
    // </div>
    )
}
export default Sidebar;