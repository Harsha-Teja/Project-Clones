import React from "react";
import HouseTutoring from "../../Assets/images/HouseTutoring.png"
import "./Footer.css"

function Footer (){
    return (
        <>
            <div className="footer-container">
                {/* First Column */}
                <div className="column-one">
                    <img src={HouseTutoring} alt="House Tutoring Logo" className="footer-logo"/>
                    <p className="col-text">Note that the development build is not optimized.Note that the development build is not optimized.
                        To create a production build, use npm run build.Note that the development build is not optimized.
                        </p>
                </div>
                {/* Second Column */}
                <div className="column-two">
                    <p className="footer-title"><strong>Support</strong></p>
                    <ul>
                        <li className="col-text"> FAQ </li>
                        <li className="col-text"> Terms and Conditions </li>
                        <li className="col-text"> FAQ </li>
                        <li className="col-text"> FAQ </li>
                        <li className="col-text"> FAQ </li>
                    </ul>
                </div>
                {/* Third Column */}
                <div className="column-three">
                    <p className="footer-title"><strong>Support</strong></p>
                    <ul>
                        <li className="col-text"> FAQ </li>
                        <li className="col-text"> Terms and Conditions </li>
                        <li className="col-text"> FAQ </li>
                        <li className="col-text"> FAQ </li>
                        <li className="col-text"> FAQ </li>
                    </ul>
                </div>
                {/* Fourth Column */}
                <div className="column-four">
                    <p className="footer-title"><strong>Contact Info</strong></p>
                    <p className="col-text-four">Contact InfoContact InfoContact InfoContact InfoContact InfoContact InfoContact InfoContact InfoContact Info
                    Contact InfoContact InfoContact Info
                    </p>
                    <p className="col-text-four">+91 9823239867 347384673845</p>
                    <p className="col-text-four">contact@HouseTutoring.com</p>
                    <i class="fab fa-linkedin icons"/>               
                    <i class="fab fa-youtube icons"/>
                    <i class="fab fa-facebook-square icons"/>
                </div>
                
            </div>
            {/* Copyrights Row */}
            {/* <hr/> */}
            <div className="bottom-mentions">
                    <small >Copyrights 2021@HouseTutoring</small>
                    <small >Made with 🤝 🔀 👨‍💻 by <strong>Teacherr</strong></small>
            </div>
        </>
    )
}

export default Footer;