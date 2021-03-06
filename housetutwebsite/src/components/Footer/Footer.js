import React from "react";
import HouseTutoring from "../../Assets/images/HouseTutoring.png"
import "./Footer.css"

function Footer (){
    return (
        <>
            <div className="footeroverall">
             {/* animation */}
             <hr className="line"/>
             <footer>
                <svg viewBox="0 0 120 28">
                <defs> 
                <mask id="xxx">
                    <circle cx="7" cy="12" r="40" fill="#fff" />
                </mask>
                
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                    <feColorMatrix in="blur" mode="matrix" values="
                        1 0 0 0 0  
                        0 1 0 0 0  
                        0 0 1 0 0  
                        0 0 0 13 -9" result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                    <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
                </defs> 

                <use id="wave3" class="wave" xlinkHref="#wave" x="0" y="-2" ></use> 
                <use id="wave2" class="wave" xlinkHref="#wave" x="0" y="0" ></use>
                
                {/* <g class="topball">
                <circle class="ball" cx="110" cy="8" r="4" stroke="none" stroke-width="0" fill="red" />

                    <g class="arrow">
                    <polyline class="" points="108,8 110,6 112,8" fill="none"  />
                    <polyline class="" points="110,6 110,10.5" fill="none"  />
                    </g>
                    
                </g> */}
                <g class="gooeff">
                <circle class="drop drop1" cx="20" cy="2" r="1.8"  />
                <circle class="drop drop2" cx="25" cy="2.5" r="1.5"  />
                <circle class="drop drop3" cx="16" cy="2.8" r="1.2"  />
                    <use id="wave1" class="wave" xlinkHref="#wave" x="0" y="1" />
                </g>

                </svg>
            </footer>
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
                    <i className="fab fa-linkedin icons"/>               
                    <i className="fab fa-youtube icons"/>
                    <i className="fab fa-facebook-square icons"/>
                </div>
            </div>
            {/* Copyrights Row */}
            {/* <hr/> */}
            <div className="bottom-mentions">
                    <small >Copyrights 2021@HouseTutoring</small>
                    <small >Made with 🤝 🔀 👨‍💻 by <strong>Teacherr</strong></small>
            </div>
            </div>
        </>
    )
}

export default Footer;