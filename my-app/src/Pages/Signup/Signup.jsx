import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom';
//import tick from '../../Assets/Images/approval.png'
import homeImage from "../../Assets/img/ishimwe.jpg"
import "../../index.scss" 
import Sidebar from "../../components/Sidebar/Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Signup() {
  return (
<div className='main-content'>
<main>
<section class="container contact" id="login">
    <div class="contact-container signup-container">
            <div class="main-title">
                <h2>Sign up <span class="bg-text">Sign up</span></h2>
            </div>
            <div class="contact-content-con login-content">
               <div class="left-contact signup">
                    <h4>Sign up here</h4>
               </div>
               <div id="errors-success-signup" style="width: 60%; padding-top: 10px" ></div>
              <div class="right-contact login-contact">
                    <form id= "sign-up" action="" class="contact-form">
                    <div class="input-control signup-control">
                                <input id="names" type="text" required placeholder="Full names"/>
                                <input id="email" type="text" required placeholder="Email"/>
                                <input id="username" type="text" required placeholder="Username"/>
                                <input id="password" type="password" required placeholder="Password"/>
                               
                            </div>
                           
                            <div class="submit-btn">
                                <a id="signup-btn" class="main-btn">
                                    <span class="btn-text">Sign up</span>
                                    <span class="btn-icon"><i class="fas fa-sign-in-alt"></i></span>
                                </a>
                            </div>   
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
export default Signup;