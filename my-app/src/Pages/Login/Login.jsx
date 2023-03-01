import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom';
import "../../index.scss" 
import Sidebar from "../../components/Sidebar/Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

//import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


function Login() {
  return (
<div className='main-content'>
<main>
<section class="container contact" id="login">
    <div class="contact-container signup-container">
            <div class="main-title">
                <h2>Log in <span class="bg-text">Log in</span></h2>
            </div>
            <div class="contact-content-con login-content">
               <div class="left-contact signup">
                    <h4>Log in</h4>
               </div>
               <div id="loading">
                        <div class="spinner"></div>
                </div>
               <div id="errors-success-signup" style="width: 60%; padding-top: 10px" ></div>
               <div class="right-contact login-contact">
                        <form id="loginForm" action="" class="contact-form">
                            <div class="input-control i-c-2">
                                <input id="usernameLogin" type="text" required placeholder="Username"/>
                                <input id="passwordLogin" type="password" required placeholder="Password"/>
                            </div>
                           
                            <div class="submit-btn">
                                <a href="#" id="loginBtn" class="main-btn">
                                    <span class="btn-text">Sign in</span>
                                    <span class="btn-icon"><i class="fas fa-sign-in-alt"></i></span>
                                </a>
                            </div>
                            <div id="errors-success-login" style="width: 60%; padding-top: 10px" ></div>
                        </form>
                    </div>
                    </div>
    </div>
</section>
<Sidebar/>
</main>
</div>
  )
}
export default Login;