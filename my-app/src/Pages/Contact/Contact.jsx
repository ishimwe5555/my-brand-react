import React from 'react'
import '../../index.scss'
import { Link } from 'react-router-dom';
//import tick from '../../Assets/Images/approval.png'
import homeImage from "../../Assets/img/ishimwe.jpg"
import "../../index.scss" 
import Sidebar from "../../components/Sidebar/Sidebar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
<div className='main-content'>
<main>
<section class="container contact" id="contact">
<div class="contact-container">
    <div class="main-title">
        <h2>Contact <span>Me</span><span class="bg-text">Contact</span></h2>
    </div>
    <div class="contact-content-con">
        <div class="left-contact">
            <h4>Contact me here</h4>
            <p>
                Feel free to say hi if you are interested in tech of things too. 
                I'm currently free and oppen for freelance projects and much more opportunities.
            </p>
            <div class="contact-info">
                <div class="contact-item">
                    <div class="icon">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>Location</span>
                    </div>
                    <p>
                         Kigali, Rwanda
                    </p>
                </div>
                <div class="contact-item">
                    <div class="icon">
                        <i class="fas fa-envelope"></i>
                        <span>Email</span>
                    </div>
                    <p>
                        <span> ishimwe96@gmail.com</span>
                    </p>
                </div>
                <div class="contact-item">
                    <div class="icon">
                        <i class="fas fa-user-graduate"></i>
                        <span>Education</span>
                    </div>
                    <p>
                        <span> Bharathiar University, Coimbatore</span>
                    </p>
                </div>
                <div class="contact-item">
                    <div class="icon">
                        <i class="fas fa-user-graduate"></i>
                        <span>Mobile Number</span>
                    </div>
                    <p>
                        <span> +250788462880</span>
                    </p>
                </div>
                <div class="contact-item">
                    <div class="icon">
                        <i class="fas fa-globe-africa"></i>
                        <span>Languages</span>
                    </div>
                    <p>
                        <span> English, French, Kinyarwanda</span>
                    </p>
                </div>
            </div>
            <div class="contact-icons">
                <div class="contact-icon">
                    <Link to="www.facebook.com/ish.norbert" target="_blank">
                        <i class="fab fa-facebook-f"></i>
                    </Link>
                    <Link to="www.twitter.com/kararaGato" target="_blank">
                        <i class="fab fa-twitter"></i>
                    </Link>
                    <Link to="#" target="_blank">
                        <i class="fab fa-github"></i>
                    </Link>
                    <Link to="#" target="_blank">
                        <i class="fab fa-youtube"></i>
                        <FontAwesomeIcon icon="fa- fa-youtube" />
                    </Link>
                </div>
            </div>
        </div>
        <div class="right-contact">
            <form action="" class="contact-form">
                <div id="errors-success"></div>
                
                <div class="input-control i-c-2">
                    <input id="contact-names" type="text"  placeholder="YOUR NAME" required/>
                    <input id="contact-email" type="email" required placeholder="YOUR EMAIL"/>
                </div>
                <div class="input-control">
                    <input id="contact-subject" type="text" required placeholder="ENTER SUBJECT"/>
                </div>
                <div class="input-control">
                    <textarea id="contact-message" name=""  cols="15" rows="8" placeholder="Message Here..."></textarea>
                </div>
                <div class="submit-btn">
                    <Link to="#" id="contact-submit" class="main-btn">
                        <span class="btn-text">Send</span>
                        <span class="btn-icon"><i class="fas fa-sign-in-alt"></i></span>
                    </Link>
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
export default Contact;