import React from "react";
import heroillustration from "../../assets/svg/Teaching.svg";
import "./Hero.css"

function Hero ({title, text}) {
    return(
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-content-container">
                        <div className="hero-content-title"> {title}</div>
                        <div className="hero-content-text">{text}</div>
                    </div>
                </div>
                <div className="hero-illustration">
                    <img src={heroillustration} alt="Teacher teaching illustration"/>
                </div>
            </div>
    )
}

export default Hero;