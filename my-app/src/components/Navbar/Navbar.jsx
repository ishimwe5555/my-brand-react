import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import "../../index.scss"
import './Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom';
import adminImage from '../../Assets/img/foto.jpg'

function Navbar(){
    const [active, setActive] = useState(false)
    const navigate = useNavigate();
    return(
        <div class="dashboard-left">
        <div class="upper-left-dashboard">
            <img src={adminImage} alt="Norbert Ishimwe"/>
            <h3>Admin</h3>              
        </div>
        <div class="sidemenu">
            <ul>
                <Link to="admin-dashboard.html"><li class="menu1"> <i class="fas fa-user-graduate"></i>Blogs</li></Link>
                <Link to="add-blog.html"><li class="menu1"> <i class="fas fa-user-graduate"></i>Add Blog</li></Link>
                <Link to="messages.html"><li class="menu1"> <i class="fas fa-user-graduate"></i>Messages</li></Link>
                <Link id="logout" to="../index.html"><li class="menu1"> <i class="fas fa-user-graduate logout"></i>Log out</li></Link>              
            </ul>
        </div>
    </div>
    )
}
export default Navbar