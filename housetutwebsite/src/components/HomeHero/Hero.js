import React from "react";
import heroillustration from "../../Assets/svg/hero-illustration.svg";
import "./Hero.css"

function Hero ({title, text, button1, button2}) {
    return(
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-content-container">
                        <div className="hero-content-title"> {title}</div>
                        <div className="hero-content-text">{text}</div>
                        <div className="hero-content-button">
                        <button className="hero-content-button-1">{button1}</button>
                        <button className="hero-content-button-2"> {button2}</button>
                        </div>
                    </div>
                </div>
                <div className="hero-illustration">
                    <img src={heroillustration} alt="Teacher teaching illustration"/>
                </div>
            </div>
    )
}

export default Hero;