import React from "react"
import { Link } from "react-router-dom";
import {Button} from "./button"

function Footer(){
    return (
        <div className="footer-container">
            <section className="footer-subscription">
                <p className="footer-subscription-heading">
                    Join the adventure of lifetime
                </p>
                <p className="footer-subscription-text">
                    You can unsubscribe anytime
                </p>
                <div className="input-areas">
                    <form>
                        <input 
                        type="email"
                        name="mail"
                        placeholder="Your Email"
                        className="footer-input"
                        />
                        <Button buttonShape="btn--outline">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </section>
            <div className="Footer-links">
                <div className="Footer-links-wrapper">
                    <div className="Footer-links-items">
                        <h2> About US</h2>
                        <Link to='/Sign-up'>How it work</Link>
                        <Link to='/'> testimonials</Link>
                        <Link to='/'> contact us</Link>
                        <Link to='/'> Career</Link>
                        <Link to='/'> Investors</Link> 
                    </div>
                    <div className="Footer-links-items">
                        <h2> About US</h2>
                        <Link to='/Sign-up'>How it work</Link>
                        <Link to='/'> testimonials</Link>
                        <Link to='/'> contact us</Link>
                        <Link to='/'> Career</Link>
                        <Link to='/'> Investors</Link> 
                    </div>
                </div>
                <div className="Footer-links-wrapper">
                    <div className="Footer-links-items">
                        <h2> About US</h2>
                        <Link to='/Sign-up'>How it work</Link>
                        <Link to='/'> testimonials</Link>
                        <Link to='/'> contact us</Link>
                        <Link to='/'> Career</Link>
                        <Link to='/'> Investors</Link> 
                    </div>
                    <div className="Footer-links-items">
                        <h2> About US</h2>
                        <Link to='/Sign-up'>How it work</Link>
                        <Link to='/'> testimonials</Link>
                        <Link to='/'> contact us</Link>
                        <Link to='/'> Career</Link>
                        <Link to='/'> Investors</Link> 
                    </div>
                </div>
            </div>
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">
                        <Link to='/' className="social-logo"> 
                            Travel <i classname="fab fa-typo3"/>
                        </Link>
                    </div> 
                    <small classname='website-rights'>Travel @2021</small>
                    <div className="social-icons">
                        <Link className="social-icon-link facebook"
                            to="/"
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link className="social-icon-link instagram"
                            to="/"
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram-f"/>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer;