import React from "react";
import heroillustration from "../../Assets/svg/homepagepic1.jpg";
import "./Hero.css"

function Hero ({title1, title2, title3, text, button1, button2, herolast}) {
    return(
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-content-container">
                        <div className="hero-content-title"> {title1}</div>
                        <div className="hero-content-title"> {title2}</div>
                        <div className="hero-content-title"> {title3}</div>
                        <div className="hero-content-text">{text}</div>
                        <div className="hero-content-button">
                        <button className="hero-content-button-1">{button1}</button>
                        {/* <button className="hero-content-button-2"> {button2}</button> */}
                        <h3 className="hero-content-last">{herolast}</h3>
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